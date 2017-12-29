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
    var EnrollmentController = /** @class */ (function (_super) {
        __extends(EnrollmentController, _super);
        function EnrollmentController(service, studentService, courseService) {
            var _this = _super.call(this, service) || this;
            console.log("I am in Enrollment Controller");
            _this.studentService = studentService;
            _this.courseService = courseService;
            if (_this.value != null) {
                alert(_this.value);
            }
            _this.reset();
            _this.loadStudent();
            _this.loadCourses();
            return _this;
        }
        EnrollmentController.prototype.$onInit = function () { };
        EnrollmentController.prototype.loadStudent = function () {
            var self = this;
            var successCallback = function (response) {
                self.students = response.data;
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            var r = new App.BaseRequestModel();
            r.page = -1;
            r.orderBy = "Name";
            r.isAscending = true;
            self.studentService.search(r).then(successCallback, errorCallback);
        };
        EnrollmentController.prototype.loadCourses = function () {
            var self = this;
            var successCallback = function (response) {
                self.courses = response.data;
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            var r = new App.BaseRequestModel();
            r.page = -1;
            r.orderBy = "Title";
            r.isAscending = true;
            self.courseService.search(r).then(successCallback, errorCallback);
        };
        EnrollmentController.prototype.addEnrollment = function () {
            var self = this;
            var successCallback = function (response) {
                alert('Enrollment added successfully');
                self.reset();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.model.studentId = self.selectedStudent.id;
            self.model.courseId = self.selectedCourse.id;
            self.model.due = (self.selectedCourse.price <= self.model.paidTotal)
                ? 0
                : (self.selectedCourse.price - self.model.paidTotal);
            self.model.isPaid = (self.model.due <= 0) ? true : false;
            self.model.isCompleted = false;
            self.model.completedContent = 0;
            self.service.save(self.model).then(successCallback, errorCallback);
        };
        EnrollmentController.prototype.setValue = function (v) {
            var self = this;
            self.value = v;
        };
        EnrollmentController.prototype.reset = function () {
            var self = this;
            self.model = new App.Enrollment();
        };
        EnrollmentController.$inject = ["EnrollmentService", "StudentService", "CourseService"];
        return EnrollmentController;
    }(App.BaseController));
    App.EnrollmentController = EnrollmentController;
    angular.module('app').controller("EnrollmentController", EnrollmentController);
})(App || (App = {}));
//# sourceMappingURL=EnrollmentControllers.js.map