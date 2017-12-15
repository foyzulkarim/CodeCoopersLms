module App {
    
    export class BaseRepository {

        //baseUrl: string;

        http: angular.IHttpService;
        q: angular.IQService;
        authData: AuthData;

        static $inject = ["$http", "$q"];
        constructor(http: angular.IHttpService, q: angular.IQService) {
            this.http = http;
            this.q = q;
            //this.baseUrl = AppConstants.BaseApiUrl;
        }

        get(url: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();

            var successCallback = function (successresponse) {
                deffered.resolve(successresponse);
            };

            var errorCallback = function (errorResponse) {
                deffered.reject(errorResponse);
            };

            self.http.get(url).then(successCallback, errorCallback);
            return deffered.promise;
        }

        post(url: string, data: any): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();
        
            var successCallback = function (successresponse) {
                //console.log(successresponse);
                deffered.resolve(successresponse);
            };

            var errorCallback = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };           
             
            self.http.post(url, data).then(successCallback, errorCallback);
            return deffered.promise;
        }

        postUrlencodedForm(url: string, data: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();
            var config: angular.IRequestShortcutConfig = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };

            var successCallback = function (successresponse) {
                //console.log(successresponse);
                deffered.resolve(successresponse);
            };

            var errorCallback = function (errorResponse) {
                //console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            console.log(data);

            self.http.post(url, data, config).then(successCallback, errorCallback);
            return deffered.promise;
        }
    }

    angular.module('app').service('BaseRepository', BaseRepository);
}