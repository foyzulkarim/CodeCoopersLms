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
var App;
(function (App) {
    var CourseController = (function (_super) {
        __extends(CourseController, _super);
        function CourseController(service, teacherService) {
            var _this = _super.call(this, service) || this;
            _this.levelOfAudiences = [];
            console.log("I am in Course Controller");
            _this.teacherService = teacherService;
            if (_this.value != null) {
                alert(_this.value);
            }
            _this.reset();
            _this.loadTeachers();
            return _this;
        }
        CourseController.prototype.loadTeachers = function () {
            var self = this;
            var successCallback = function (response) {
                self.teachers = response.data;
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            var r = new App.BaseRequestModel();
            r.page = -1;
            r.orderBy = "Name";
            r.isAscending = true;
            self.teacherService.search(r).then(successCallback, errorCallback);
        };
        CourseController.prototype.addCourse = function () {
            var self = this;
            var successCallback = function (response) {
                alert('Course added successfully');
                self.reset();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.model.teacherId = self.selectedTeacher.id;
            self.service.save(self.model).then(successCallback, errorCallback);
        };
        CourseController.prototype.setValue = function (v) {
            var self = this;
            self.value = v;
        };
        CourseController.prototype.reset = function () {
            var self = this;
            self.model = new App.Course();
            self.model.publishDate = new Date();
        };
        return CourseController;
    }(App.BaseController));
    CourseController.$inject = ["CourseService", "TeacherService"];
    App.CourseController = CourseController;
    angular.module('app').controller("CourseController", CourseController);
})(App || (App = {}));
//# sourceMappingURL=CourseController.js.map