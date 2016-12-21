module Vta {
    "use strict";

    export class CourseService extends BaseService {

        static $inject = ["$q", "urlService", "webService"];

        constructor($q: angular.IQService, urlService: UrlService, webService: WebService) {
            super($q, urlService, webService);
        }

        getAll(courseRequest: CourseListRequest): angular.IPromise<CourseListResponse> {
            var self = this;
            let url = self.url.courseUrl;
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
            self.web.post(self.url.courseUrl, courseSaveRequest).then((result: any): any => {
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
            self.web.put(self.url.courseUrl, courseSaveRequest).then((result: any): any => {
                var response = new CourseResponse(true, null, "Success");
                response.Course = new CourseViewModel();
                response.Course.Id = result.data;
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

    }

    angular.module("vta").service("courseService", CourseService);
}