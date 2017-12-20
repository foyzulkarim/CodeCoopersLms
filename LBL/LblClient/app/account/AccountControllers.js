var App;
(function (App) {
    var RegistrationController = /** @class */ (function () {
        function RegistrationController() {
            console.log('i am in regsiter');
        }
        return RegistrationController;
    }());
    angular.module('app').controller('RegistrationController', (RegistrationController));
    var SigninController = /** @class */ (function () {
        function SigninController(state, scope, account, web) {
            console.log('i am in signin');
            this.web = web;
            this.account = account;
            this.user = new App.User();
        }
        SigninController.prototype.signin = function () {
            // call web service 
            var self = this;
            var errorCallback = function (response) {
                console.error(response);
            };
            var successCallback = function (response) {
                self.$scope.$broadcast("signedin", response.data);
            };
            self.account.signin(self.user.email, self.user.password).then(successCallback, errorCallback);
        };
        SigninController.$inject = ["$state", "$scope", "AccountService", "WebService"];
        return SigninController;
    }());
    App.SigninController = SigninController;
    angular.module('app').controller('SigninController', (SigninController));
})(App || (App = {}));
//# sourceMappingURL=AccountControllers.js.map