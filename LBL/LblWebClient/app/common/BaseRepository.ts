module App {
    
    export class BaseRepository {

        baseUrl: string;
        rootUrl: string;
        http: angular.IHttpService;
        q: angular.IQService;

        static $inject = ["$http", "$q"];
        constructor(http: angular.IHttpService, q: angular.IQService) {
            this.http = http;
            this.q = q;
            this.baseUrl = "http://localhost:30285/api/";
            this.rootUrl = "http://localhost:30285/";
        }

        post(subUrl: string, data: any): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();

            var successCallback = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };

            var errorCallback = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };

            self.http.post(self.baseUrl + subUrl, data).then(successCallback, errorCallback);
            return deffered.promise;
        }

        postUrlencodedForm(subUrl: string, data: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();
            var config: angular.IRequestShortcutConfig =
                { headers: { 'Content-Type': "application/x-www-form-urlencoded" } };
            self.http.post(self.rootUrl + subUrl, data, config).then((result: any): any => {
                    if (result.status === 200) {
                        deffered.resolve(result);
                    } else {
                        deffered.reject(result);
                    }
                },
                error => { deffered.reject(error); });
            return deffered.promise;
        }
    }

    angular.module('app').service('BaseRepository', BaseRepository);
}