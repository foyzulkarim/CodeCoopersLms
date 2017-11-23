﻿module App {

    export class UrlService {

        student: string;
        teacher: string;
        course: string;
        content: string;
        
        constructor() {
            this.student = "Student";
            this.teacher = "Teacher";
            this.course = "Course";
            this.content = "Content";

        }
    }

    angular.module('app').service('UrlService', UrlService);


    export class BaseService<T> {
        baseRepository: BaseRepository;
        q: angular.IQService;
        commandUrl: string;

        static $inject = ["BaseRepository", "$q"];
        constructor(baseRepository: BaseRepository, q: angular.IQService, url: string) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.commandUrl = url;
        }

        save(data: any): angular.IPromise<any> {
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

            data.id = "1";
            data.created = new Date();
            data.modified = new Date();
            data.createdBy = "me";
            data.modifiedBy = "me";
            
            self.baseRepository.post(self.commandUrl, data).then(successCallback, errorCallback);
            return deffered.promise;
        }

        search(request: any): angular.IPromise<any> {
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

            self.baseRepository.post(self.commandUrl+"Query", request).then(successCallback, errorCallback);
            return deffered.promise;
        }
    }
}