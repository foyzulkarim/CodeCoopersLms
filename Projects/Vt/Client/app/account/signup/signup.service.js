angular.module('vt.account').service('signupService', ['$resource', '$q', 'authenticationSvc',
    function eventService($resource, $q, authenticationSvc) {
      
        function signup(user) {
            var deferred = $q.defer();
            authenticationSvc.signup(user,
                function (response) {
                    return deferred.resolve(response);
                },
                function (error) {
                    return deferred.reject(error);
                });
            return deferred.promise;
        }

        return {
           
            signup: signup
        }
    }]);
