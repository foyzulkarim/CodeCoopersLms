module Vta {
    "use strict";

    export class WebService {
        private qService: angular.IQService;
        private httpService: angular.IHttpService;

        static $inject = ["$q", "$http"];

        constructor($q: ng.IQService, $http: ng.IHttpService) {
            this.qService = $q;
            this.httpService = $http;
        }

        post(url: string, data: any): angular.IPromise<any> {
            var self = this;
            var deffered = self.qService.defer();
            self.httpService.post(url, data).then((result: any): any => {
                if (result.status === 200) {
                    deffered.resolve(result);
                } else {
                    deffered.reject(result);
                }
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

        put(url: string, data: any): angular.IPromise<any> {
            var self = this;
            var deffered = self.qService.defer();
            self.httpService.put(url, data).then((result: any): any => {
                if (result.status === 200) {
                    deffered.resolve(result);
                } else {
                    deffered.reject(result);
                }
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }


        postUrlencodedForm(url: string, data: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.qService.defer();
            var config: angular.IRequestShortcutConfig = { headers: { 'Content-Type': "application/x-www-form-urlencoded" } };
            self.httpService.post(url, data, config).then((result: any): any => {
                if (result.status === 200) {
                    deffered.resolve(result);
                } else {
                    deffered.reject(result);
                }
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }


        get(url: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.qService.defer();
            self.httpService.get(url).then((result: any): any => {
                if (result.status === 200) {
                    deffered.resolve(result);
                } else {
                    deffered.reject(result);
                }
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

    }

    angular.module("vta").service("webService", WebService);

}