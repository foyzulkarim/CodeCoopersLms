module Vta {
    "use strict";

    export class CourseService extends BaseService {

        static $inject = ["$q", "urlService", "webService"];

        constructor($q: angular.IQService, urlService: UrlService, webService: WebService) {
            super($q, urlService, webService);
        }

        getAll(courseRequest: CourseListRequest): angular.IPromise<CourseListResponse> {
            var self = this;
            var  url = self.url.CourseUrl;
            if (courseRequest != null) {
                url += courseRequest.getQueryString();
            }
            var deffered = self.q.defer();
            self.web.get(url).then((result: any): any => {
                var response = new CourseListResponse(true, null, "Success");
                response.Courses = result.data;
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

        save(courseSaveRequest: CourseSaveRequest): angular.IPromise<CourseResponse> {
            var self = this;
            var deffered = self.q.defer();
            self.web.post(self.url.CourseUrl, courseSaveRequest).then((result: any): any => {
                var response = new CourseResponse(true, null, "Success");
                response.Course = new CourseViewModel();
                response.Course.Id = result.data;
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

        update(courseSaveRequest: CourseSaveRequest): angular.IPromise<CourseResponse> {
            var self = this;
            var deffered = self.q.defer();
            self.web.put(self.url.CourseUrl, courseSaveRequest).then((result: any): any => {
                var response = new CourseResponse(true, null, "Success");
                response.Course = new CourseViewModel();
                response.Course.Id = result.data;
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

        getDetail(courseDetailRequest : DetailRequest): angular.IPromise<CourseDetailResponse> {
            var self = this;
            var deffered = self.q.defer();
            var url = self.url.CourseDetailUrl;
            if (courseDetailRequest != null) {
                url += courseDetailRequest.getQueryString();
            }
            self.web.get(url).then((result: any): any => {
                var response = new CourseDetailResponse(true, null, "Success");
                response.CourseDetail = result.data;
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
                });
            return deffered.promise;
        }

        getContentDetail(detailRequest: DetailRequest): angular.IPromise<ContentDetailResponse> {
            var self = this;
            var deffered = self.q.defer();
            var url = self.url.ContentDetailUrl;
            if (detailRequest != null) {
                url += detailRequest.getQueryString();
            }
            self.web.get(url).then((result: any): any => {
                var response = new ContentDetailResponse(true, null, "Success");
                response.ContentDetail = result.data;
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

        download(detailRequest: DetailRequest): void {
            var self = this;            
            var url = self.url.DownloadUrl;
            if (detailRequest != null) {
                url += detailRequest.getQueryString();
            }
            window.open(url, '_blank', '');           
        }

    }

    angular.module("vta").service("courseService", CourseService);
}