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
            _this.model = new App.Course();
            _this.model.publishDate = new Date();
            _this.loadTeachers();
            return _this;
        }
        CourseController.prototype.loadTeachers = function () {
            var self = this;
            var successCallback = function (response) {
                console.log('teacher list - ', response.data);
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
        //groupChanged(): void {
        //    console.log(this.model.productGroupId);
        //}
        CourseController.prototype.reset = function () {
            this.model = new App.Course();
        };
        return CourseController;
    }(App.BaseController));
    CourseController.$inject = ["CourseService", "TeacherService"];
    App.CourseController = CourseController;
    angular.module('app').controller("CourseController", CourseController);
})(App || (App = {}));
//# sourceMappingURL=CourseController.js.map