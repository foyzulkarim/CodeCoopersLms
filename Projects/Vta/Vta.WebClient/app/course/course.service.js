var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vta;
(function (Vta) {
    "use strict";
    var CourseService = (function (_super) {
        __extends(CourseService, _super);
        function CourseService($q, urlService, webService) {
            _super.call(this, $q, urlService, webService);
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
        CourseService.$inject = ["$q", "urlService", "webService"];
        return CourseService;
    })(Vta.BaseService);
    Vta.CourseService = CourseService;
    angular.module("vta").service("courseService", CourseService);
})(Vta || (Vta = {}));
//# sourceMappingURL=course.service.js.map