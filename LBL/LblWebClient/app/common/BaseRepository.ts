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

        post(url: string, data: any): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();
            var authorizationConfig: angular.IRequestShortcutConfig;

            var successCallback = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };

            var errorCallback = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };

            self.authData = JSON.parse(localStorage.getItem("AuthData"));

            if (self.authData != null) {
                authorizationConfig = {
                    headers: { 'Authorization': self.authData.tokenType + ' ' + self.authData.token }
                };
            }


            self.http.post(url, data, authorizationConfig).then(successCallback, errorCallback);
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

            self.http.post(url, data, config).then(successCallback, errorCallback);
            return deffered.promise;
        }
    }

    angular.module('app').service('BaseRepository', BaseRepository);
}