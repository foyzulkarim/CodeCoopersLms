var App;
(function (App) {
    "use strict";
    var NavController = (function () {
        function NavController(accountService, stateService) {
            var self = this;
            self.accountService = accountService;
            self.stateService = stateService;
            self.isSignedIn = false;
            self.reset();
        }
        NavController.prototype.signUpUser = function () {
            var self = this;
            var successCallback = function (response) {
                if (response.status == App.AppConstants.StatusOk) {
                    alert("Thank you for siging up to CodeCoopers");
                    self.reset();
                }
                else if (response.status == App.AppConstants.StatusBad) {
                    alert("Sign up failed");
                }
            };
            var errorCallback = function (response) {
                console.error(response);
            };
            self.accountService.register(self.user).then(successCallback, errorCallback);
        };
        NavController.prototype.signIn = function () {
            var self = this;
            var successCallback = function (response) {
                if (response.status == App.AppConstants.StatusOk) {
                    self.isSignedIn = true;
                    self.stateService.go("root.home");
                }
                else {
                    alert("Sign in failed");
                }
            };
            var errorCallback = function (response) {
                console.error(response);
            };
            self.accountService.signin(self.user.email, self.user.password).then(successCallback, errorCallback);
        };
        NavController.prototype.reset = function () {
            var self = this;
            self.user = new App.User();
        };
        return NavController;
    }());
    NavController.$inject = ["AccountService", "$state"];
    App.NavController = NavController;
    angular.module("app").controller("NavController", NavController);
})(App || (App = {}));
//# sourceMappingURL=nav.controller.js.map