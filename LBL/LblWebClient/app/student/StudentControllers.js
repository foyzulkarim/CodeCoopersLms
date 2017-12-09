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
    var StudentController = (function (_super) {
        __extends(StudentController, _super);
        function StudentController(service) {
            var _this = _super.call(this, service) || this;
            _this.model = new App.Student();
            console.log("I am in student controller");
            _this.searchRequest["due"] = 0;
            return _this;
        }
        StudentController.prototype.reset = function () {
            this.model = new App.Student();
        };
        return StudentController;
    }(App.BaseController));
    StudentController.$inject = ["StudentService"];
    angular.module('app').controller("StudentController", StudentController);
    var StudentsController = (function (_super) {
        __extends(StudentsController, _super);
        function StudentsController(service) {
            var _this = _super.call(this, service) || this;
            console.log('i am in Students controller constructor');
            _this.search();
            return _this;
        }
        StudentsController.prototype.reset = function () { };
        return StudentsController;
    }(App.BaseController));
    StudentsController.$inject = ["StudentService"];
    angular.module('app').controller("StudentsController", StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map