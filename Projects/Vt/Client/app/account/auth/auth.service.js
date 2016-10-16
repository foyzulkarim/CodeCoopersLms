angular.module('vt.account').service("authenticationSvc", ["$resource", "$http", "$q", "$window", "appService", function ($resource, $http, $q, $window, appService) {
    var user;

    function signin(signinModel) {
      
        var resource = $resource(appService.baseUrl + 'Signin');
        var deferred = $q.defer();
        resource.save(signinModel,
            function (response) {
                if (response.IsSuccess) {
                    user = response.Data;
                    $window.sessionStorage.setItem("user", JSON.stringify(response.Data));
                    return deferred.resolve(response);
                } else {
                    return deferred.reject(response);
                }                
            },
            function (error) {
                //console.log(error);
                return deferred.reject(error);
            });
        return deferred.promise;
    }

    function signup(signupModel) {
        var deferred = $q.defer();
        var resource = $resource(appService.baseUrl + "signup");
        resource.save(signupModel, function(response) {
            if (response.IsSuccess) {
                user = response.Data;
                $window.sessionStorage.setItem("user", JSON.stringify(response.Data));
                return deferred.resolve(response);
            } else {
                return deferred.reject(response);
            }    
        }, function(error) {
            return deferred.reject(error);
        });     

        return deferred.promise;
    }

    function signout() {
        user = null;        
        $window.sessionStorage.removeItem("user");
    }

    function checkAccess(route) {
        var deferred = $q.defer();
        var resource = $resource(appService.baseUrl + "/authorization");
        var request = { id: user.Id, route: route };
        resource.save(request, function(result) {
            var response = result.IsSuccess;         
            if (response) {
                return   deferred.resolve(response);
            } else {
                return   deferred.reject({ authenticated: true, authorized: false, defaultRoute: user.defaultRoute });
            }
        }, function(error) {
            return deferred.reject(error);
        });
        
        return deferred.promise;
    }

    function getUserInfo() {
        if (user==null) {
            if ($window.sessionStorage["user"]) {
                user = JSON.parse($window.sessionStorage.getItem("user"));
            }
        }
        return user;
    }

    function authorize(route) {      
        if (user) {
            var access = checkAccess(route);
            if (access) {
                access.then(function (response) {
                    console.log(response);
                }, function (error) {
                    console.log(error);
                });
                return $q.when(access);
            } else {
                return $q.reject({ authenticated: true, authorized: false });
            }
        } else {
            return $q.reject({ authenticated: false });
        }
    };

    function isSignedIn() {
        return user!=null && user.Name.length>0 && user.Id.length>0;
    }

    function getToken() {
        if (user!=null) {
            return user.Id + ":" + user.Token;
        }
        return '';
    }

    function init() {
        if ($window.sessionStorage["user"]) {
            user = JSON.parse($window.sessionStorage.getItem("user"));
        }
    }
    init();

    return {
        signin: signin,
        signout: signout,
        getUserInfo: getUserInfo,
        checkAccess: checkAccess,
        signup: signup,
        authorize: authorize,
        isSignedIn: isSignedIn,
        getToken:getToken
    };
}]);


angular.module('vt.account').factory('sessionInjector', ['$window', function ($window) {
        var sessionInjector = {
            request: function(config) {
                if ($window.sessionStorage["user"]) {
                    var user = JSON.parse($window.sessionStorage.getItem("user"));
                    if (user && user.Id && user.Token) {
                        var x = window.btoa(user.Id + ":" + user.Token);
                        config.headers['x-session-token'] = x;
                    } else {
                        config.headers['x-session-token'] = '';
                    }
                }
                 
                return config;
            }
        };
        return sessionInjector;
    }
]);