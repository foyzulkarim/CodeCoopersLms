var App;
(function (App) {
    "use strict";
    var NavController = (function () {
        function NavController(accountService, stateService, scope) {
            var self = this;
            self.accountService = accountService;
            self.stateService = stateService;
            self.$scope = scope;
            self.isUserSignedIn();
            self.authData = new App.AuthData();
            self.reset();
            self.$scope.$on("signedIn", self.signedInSuccessfully);
            self.$scope.$on("signedOut", self.signedOutSuccessfully);
        }
        NavController.prototype.signedInSuccessfully = function (source, q) {
            console.log('signedInSuccessfully: ');
            console.log(source, q);
            source.targetScope.vm1.isSignedIn = true;
            source.currentScope.vm1.isSignedIn = true;
        };
        NavController.prototype.signedOutSuccessfully = function (source) {
            console.log('signedOutSuccessfully: ');
            //this.isSignedIn = false;
            source.targetScope.vm1.isSignedIn = false;
            source.currentScope.vm1.isSignedIn = false;
        };
        NavController.prototype.isUserSignedIn = function () {
            var self = this;
            self.authData = JSON.parse(localStorage.getItem("AuthData"));
            if (self.authData == null) {
                self.isSignedIn = false;
            }
            else {
                self.isSignedIn = true;
                self.stateService.go(self.authData.landingRoute);
            }
        };
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
                    self.authData.token = response.data.access_token;
                    self.authData.tokenType = response.data.token_type;
                    self.authData.userName = response.data.userName;
                    self.authData.landingRoute = response.data.landingRoute;
                    localStorage.setItem("AuthData", JSON.stringify(self.authData));
                    //let landingRoute = response.data.landingRoute;
                    //location.reload();
                    self.$scope.$broadcast("signedIn", response.data);
                    self.stateService.go('root.home');
                    //self.stateService.go(landingRoute);
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
        NavController.prototype.singout = function () {
            var self = this;
            localStorage.removeItem("AuthData");
            //this.stateService.go('root.SignIn');
            self.$scope.$broadcast("signedOut");
        };
        NavController.prototype.reset = function () {
            var self = this;
            self.user = new App.User();
        };
        return NavController;
    }());
    NavController.$inject = ["AccountService", "$state", "$scope"];
    App.NavController = NavController;
    angular.module("app").controller("NavController", NavController);
})(App || (App = {}));
//# sourceMappingURL=nav.controller.js.map