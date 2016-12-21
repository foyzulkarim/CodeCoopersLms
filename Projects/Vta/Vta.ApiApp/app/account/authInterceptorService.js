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
                console.log('permission rejection');
                console.log(rejection);
            }
            return $q.reject(rejection);
        };
        authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.responseError = _responseError;

        return authInterceptorServiceFactory;
    }
]);