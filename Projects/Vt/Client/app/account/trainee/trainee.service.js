angular.module('vt.account').service('traineeService', ['$resource', '$q', 'appService',
    function ($resource, $q, appService) {
      
        var get = function (id) {
            var deferred = $q.defer();
            var resource = $resource(appService.baseUrl + 'Trainee');
            resource.get({ id: id },
                function (response) {
                    return deferred.resolve(response);
                },
                function (error) {
                    //console.log(error);
                    return deferred.reject(error);
                });
            return deferred.promise;
        }

        var pay = function(payment) {
            var deferred = $q.defer();
            var resource = $resource(appService.baseUrl + 'Payment');
            resource.save(payment,
                function (response) {
                    return deferred.resolve(response);
                },
                function (error) {
                    //console.log(error);
                    return deferred.reject(error);
                });
            return deferred.promise;
        }

        return {
           
            get: get,
            pay:pay
        }
    }]);
