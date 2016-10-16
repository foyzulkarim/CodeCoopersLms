angular.module('vt.account').service('signinService', ['$resource', '$q', 'authenticationSvc',
    function signinService($resource, $q, authenticationSvc) {
       
        function signin(user) {
            var deferred = $q.defer();
            authenticationSvc.signin(user,
                function (response) {
                    return deferred.resolve(response);
                },
                function (error) {
                    return deferred.reject(error);
                });
            return deferred.promise;
        }

        return {
            signin: signin
        }
    }]);
