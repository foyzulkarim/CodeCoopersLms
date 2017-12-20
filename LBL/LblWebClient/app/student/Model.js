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
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student() {
            return _super.call(this) || this;
        }
        return Student;
    }(App.Entity));
    App.Student = Student;
    var BaseRequestModel = /** @class */ (function () {
        function BaseRequestModel() {
        }
        return BaseRequestModel;
    }());
    App.BaseRequestModel = BaseRequestModel;
})(App || (App = {}));
//# sourceMappingURL=Model.js.map