angular.module('vt.course').service('classService', ['$resource', '$q', 'appService',
    function classService($resource, $q, appService) {
        var get = function (id) {
            var deferred = $q.defer();
            var resource = $resource(appService.baseUrl + 'Class');
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

        var isUnlocked = function(id) {
            var deferred = $q.defer();
            var resource = $resource(appService.baseUrl + 'Unlock');
            resource.get({ id: id },
                function (response) {
                    return deferred.resolve(response);
                },
                function (error) {                  
                    return deferred.reject(error);
                });
            return deferred.promise;
        };

        var getId = function (currentNo) {
            var deferred = $q.defer();
            var resource = $resource(appService.baseUrl + 'Content');
            resource.get(currentNo,
                function (response) {
                    if (response.IsSuccess) {
                        return deferred.resolve(response);
                    } else {
                        return deferred.reject(response);
                    }                    
                },
                function (error) {
                    return deferred.reject(error);
                });
            return deferred.promise;
        };

        var loadQuiz = function(contentId) {
            var deferred = $q.defer();
            var resource = $resource(appService.baseUrl + 'Quiz');
            resource.get({ contentId: contentId },
                function (response) {
                    return deferred.resolve(response);
                },
                function (error) {
                    //console.log(error);
                    return deferred.reject(error);
                });
            return deferred.promise;
        }

        var submitAnswers = function(answers) {
            var deferred = $q.defer();
            var resource = $resource(appService.baseUrl + 'Quiz');
            resource.save(answers,
                function (response) {
                    return deferred.resolve(response);
                },
                function (error) {
                    //console.log(error);
                    return deferred.reject(error);
                });
            return deferred.promise;
        };

        var unlockFirstContent = function() {
            var deferred = $q.defer();
            var resource = $resource(appService.baseUrl + 'Unlock');
            resource.save(null,
                function (response) {
                    return deferred.resolve(response);
                },
                function (error) {
                    //console.log(error);
                    return deferred.reject(error);
                });
            return deferred.promise;
        };

        return {
            get: get,
            isUnlocked: isUnlocked,
            getId: getId,
            loadQuiz: loadQuiz,
            submitAnswers: submitAnswers,
            unlockFirstContent:unlockFirstContent
        }
    }]);
