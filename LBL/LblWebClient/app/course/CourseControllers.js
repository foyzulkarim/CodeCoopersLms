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
    var CourseController = /** @class */ (function (_super) {
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
        CourseController.prototype.$onInit = function () { };
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
        CourseController.prototype.save = function () {
            var self = this;
            // do your all custom calculation and logic here and prepare the model accordingly
            _super.prototype.save.call(this);
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
        CourseController.$inject = ["CourseService", "TeacherService"];
        return CourseController;
    }(App.BaseController));
    App.CourseController = CourseController;
    angular.module('app').controller("CourseController", CourseController);
    var CourseContentsController = /** @class */ (function (_super) {
        __extends(CourseContentsController, _super);
        function CourseContentsController(service, $stateParams, $sce) {
            var _this = _super.call(this, service) || this;
            var self = _this;
            self.stateParams = $stateParams;
            self.sceService = $sce;
            self.searchRequest.page = -1;
            self.searchRequest.perPageCount = 100;
            self.searchRequest.orderBy = "Serial";
            self.searchRequest.isAscending = true;
            self.searchRequest.keyword = self.stateParams["id"];
            self.activeContent = new App.Content();
            self.getCourseContents();
            return _this;
        }
        CourseContentsController.prototype.$onInit = function () { };
        CourseContentsController.prototype.getCourseContents = function () {
            var self = this;
            var successCallBack = function (response) {
                self.models = response.data;
                self.courseTitle = self.models[0].courseTitle;
                self.setActiveContent(self.models[0]);
                console.log(self.courseTitle);
            };
            var errorCallBack = function (response) {
                console.error(response);
            };
            self.service.search(self.searchRequest).then(successCallBack, errorCallBack);
        };
        CourseContentsController.prototype.setActiveContent = function (content) {
            var self = this;
            self.activeContent = content;
            self.activeContent.url = self.sceService.trustAsResourceUrl(content.url);
        };
        CourseContentsController.prototype.reset = function () {
            throw new Error("Method not implemented.");
        };
        CourseContentsController.$inject = ["ContentService", "$stateParams", "$sce"];
        return CourseContentsController;
    }(App.BaseController));
    App.CourseContentsController = CourseContentsController;
    angular.module('app').controller("CourseContentsController", CourseContentsController);
})(App || (App = {}));
//# sourceMappingURL=CourseControllers.js.map