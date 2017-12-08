angular.module('app').service("authInterceptorService",
    [
        "$q", "$injector", function ($q, $injector) {

            var authInterceptorServiceFactory = {};

            var request = function (config) {

                config.headers = config.headers || {};
                config.headers.Mama = 'mamamama';
                var authData = JSON.parse(localStorage.getItem("AuthData"));
                if (authData) {
                    config.headers.Authorization = authData.tokenType + " " + authData.token;
                }

                return config;
            };
            var responseError = function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    console.log('permission rejection');
                    console.log(rejection);

                    var $state = $injector.get("$state");
                    $state.go("root.signin");
                }
                return $q.reject(rejection);
            };

            authInterceptorServiceFactory["request"] = request;
            authInterceptorServiceFactory["responseError"] = responseError;

            return authInterceptorServiceFactory;
        }
    ]);

angular.module("app").config([
    '$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push("authInterceptorService");
    }
]);

