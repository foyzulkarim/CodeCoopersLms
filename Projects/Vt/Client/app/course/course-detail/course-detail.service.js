angular.module('vt.course').service('courseDetailService', ['$resource', '$q', 'appService',
    function ($resource, $q, appService) {
        var resource = $resource(appService.baseUrl+'Level');
        var get = function () {
            var deferred = $q.defer();
            resource.get(
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
            get: get           
        }
    }]);
