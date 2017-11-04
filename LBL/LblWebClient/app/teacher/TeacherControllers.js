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
    var Entity = (function () {
        function Entity() {
        }
        return Entity;
    }());
    App.Entity = Entity;
    var Teacher = (function (_super) {
        __extends(Teacher, _super);
        function Teacher() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Teacher;
    }(Entity));
    App.Teacher = Teacher;
    var TeacherController = (function () {
        function TeacherController(service) {
            this.model = new Teacher();
            this.service = service;
        }
        TeacherController.prototype.add = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.reset();
            };
            var error = function (errorReason) {
                console.error(errorReason);
            };
            this.service.save(self.model).then(success, error);
        };
        TeacherController.prototype.reset = function () {
            this.model = new Teacher();
        };
        return TeacherController;
    }());
    TeacherController.$inject = ["TeacherService"];
    angular.module('app').controller("TeacherController", TeacherController);
    var TeachersController = (function () {
        function TeachersController(service) {
            this.service = service;
            var self = this;
            self.models = [];
            self.searchRequest = new App.BaseRequestModel();
            self.searchRequest.page = 1;
            var success = function (response) {
                self.models = response.data;
                console.log(self.models);
            };
            var error = function (errorReason) {
                alert(errorReason);
            };
            console.log('i am in Teachers controller constructor');
            this.service.search(self.searchRequest).then(success, error);
        }
        TeachersController.prototype.search = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.models = response.data;
            };
            var error = function (errorReason) {
                console.error(errorReason);
            };
            this.service.search(self.searchRequest).then(success, error);
        };
        TeachersController.prototype.sort = function (property) {
            var self = this;
            self.searchRequest.orderBy = property;
            self.searchRequest.isAscending = !self.searchRequest.isAscending;
            self.search();
        };
        TeachersController.prototype.next = function () {
            var self = this;
            self.searchRequest.page = self.searchRequest.page + 1;
            self.search();
        };
        TeachersController.prototype.previous = function () {
            var self = this;
            if (self.searchRequest.page > 1) {
                self.searchRequest.page = self.searchRequest.page - 1;
                self.search();
            }
        };
        return TeachersController;
    }());
    TeachersController.$inject = ["TeacherService"];
    angular.module('app').controller("TeachersController", TeachersController);
})(App || (App = {}));
//# sourceMappingURL=TeacherControllers.js.map