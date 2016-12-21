"use strict";
angular.module("vta").factory("authInterceptorService", [
    "$q", "$injector", "localStorageService", function($q, $injector, localStorageService) {

        var authInterceptorServiceFactory = {};

        var _request = function(config) {

            config.headers = config.headers || {};
            //  config.headers.Mama = 'mamamama';
            var authData = localStorageService.get("authorizationData");
            if (authData) {
                config.headers.Authorization = "Bearer " + authData.accessToken;
                //config.headers.Mama = 'mamamama';
            }

            return config;
        };
        var _responseError = function(rejection) {
            if (rejection.status === 401) {
                var authService = $injector.get("authService");
                var authData = localStorageService.get("authorizationData");

                if (authData) {
                    if (authData.useRefreshTokens) {
                        $location.path("/refresh");
                        return $q.reject(rejection);
                    }
                }
                authService.logOut();
                $location.path("/login");
            }
            return $q.reject(rejection);
        };
        authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.responseError = _responseError;

        return authInterceptorServiceFactory;
    }
]);