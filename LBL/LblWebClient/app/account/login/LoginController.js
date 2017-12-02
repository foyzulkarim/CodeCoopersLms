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
    var LoginController = (function (_super) {
        __extends(LoginController, _super);
        function LoginController(service) {
            var _this = _super.call(this, service) || this;
            _this.reset();
            return _this;
        }
        LoginController.prototype.login = function () {
            var self = this;
            var successCallback = function (response) {
                alert('Login successfully');
                self.reset();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.model.grant_type = "password";
            var data = "username=" + self.model.username + "&password=" + self.model.password + "&grant_type=password";
            self.service.login(data).then(successCallback, errorCallback);
        };
        LoginController.prototype.reset = function () {
            this.model = new App.Login();
        };
        return LoginController;
    }(App.BaseController));
    LoginController.$inject = ["LoginService"];
    angular.module('app').controller("LoginController", LoginController);
})(App || (App = {}));
//# sourceMappingURL=LoginController.js.map