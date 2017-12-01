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
    var RegisterController = (function (_super) {
        __extends(RegisterController, _super);
        function RegisterController(service) {
            var _this = _super.call(this, service) || this;
            _this.reset();
            return _this;
        }
        RegisterController.prototype.reset = function () {
            this.model = new App.Register();
        };
        return RegisterController;
    }(App.BaseController));
    RegisterController.$inject = ["RegisterService"];
    angular.module('app').controller("RegisterController", RegisterController);
})(App || (App = {}));
//# sourceMappingURL=registerController.js.map