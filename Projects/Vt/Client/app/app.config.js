angular.module('vt', ['ngRoute', 'ngResource', 'ngCookies', 'vt.account', 'vt.course'])
    .config([
        '$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
            $routeProvider.when('/', { templateUrl: 'app/account/signup/signup.tpl.html', controller: 'signupController' }).when('/faq', { templateUrl: 'app/faq/faq.tpl.html', controller: 'signupController' }).otherwise({ redirectTo: '/' });
            
            $httpProvider.interceptors.push('sessionInjector');
    }
    ]);

angular.module('vt').run(["$rootScope", "$location", "authenticationSvc", function ($rootScope, $location, authenticationSvc) {

    function isAllowedPath(next,current) {
        return (next && next.originalPath === '/signin' || next && next.originalPath === '/signup' || next && next.originalPath === '/faq') && (current && current.originalPath === '/signin' || current && current.originalPath === '/signup' || current && current.originalPath === '/faq');
    }

    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (authenticationSvc.isSignedIn()) {
            if (next.originalPath === "/" || next.originalPath === "/signin" || next.originalPath === "/signup") {
                $location.path("/" + angular.lowercase('course-detail'));
            } else {
                authenticationSvc.checkAccess(next.originalPath).then(function (response) {
                    console.log(response);
                }, function (error) {
                    $rootScope.$broadcast("$routeChangeError", next, current, error);
                });
            }            
        } else {
            if (next && current && isAllowedPath(next, current)) {
                $location.path(next.originalPath);
            } else {
                $location.path("/signin");
            }

        }

    });

    $rootScope.$on("$locationChangeStart", function(event,next,current) {
        //authenticationSvc.checkAccess(next).then(function (response) {
        //    console.log(response);
        //}, function (error) {
        //    console.log(error);
        //});
    });

    $rootScope.$on("$routeChangeError", function (event, current, previous, eventObj) {
        if (eventObj.authenticated === false) {
            $location.path("/login");
        }
        if (eventObj.authorized === false) {         
            $location.path("/" + angular.lowercase('course-detail'));
        }
    });

    $rootScope.$on("signoutSuccess", function (event) {
        $location.path("/signin");
    });

}]);
