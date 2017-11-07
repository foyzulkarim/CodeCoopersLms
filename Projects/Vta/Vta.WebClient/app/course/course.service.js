var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vta;
(function (Vta) {
    "use strict";
    var CourseService = (function (_super) {
        __extends(CourseService, _super);
        function CourseService($q, urlService, webService) {
            return _super.call(this, $q, urlService, webService) || this;
        }
        CourseService.prototype.getAll = function (courseRequest) {
            var self = this;
            var url = self.url.courseUrl;
            if (courseRequest != null) {
                url += courseRequest.getQueryString();
            }
            var deffered = self.q.defer();
            self.web.get(url).then(function (result) {
                var response = new Vta.CourseListResponse(true, null, "Success");
                response.Courses = result.data;
                deffered.resolve(response);
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        CourseService.prototype.save = function (courseSaveRequest) {
            var self = this;
            var deffered = self.q.defer();
            self.web.post(self.url.courseUrl, courseSaveRequest).then(function (result) {
                var response = new Vta.CourseResponse(true, null, "Success");
                response.Course = new Vta.CourseViewModel();
                response.Course.Id = result.data;
                deffered.resolve(response);
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        CourseService.prototype.update = function (courseSaveRequest) {
            var self = this;
            var deffered = self.q.defer();
            self.web.put(self.url.courseUrl, courseSaveRequest).then(function (result) {
                var response = new Vta.CourseResponse(true, null, "Success");
                response.Course = new Vta.CourseViewModel();
                response.Course.Id = result.data;
                deffered.resolve(response);
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        return CourseService;
    }(Vta.BaseService));
    CourseService.$inject = ["$q", "urlService", "webService"];
    Vta.CourseService = CourseService;
    angular.module("vta").service("courseService", CourseService);
})(Vta || (Vta = {}));
//# sourceMappingURL=course.service.js.map