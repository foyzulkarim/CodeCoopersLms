var App;
(function (App) {
    "use strict";
    var NavController = /** @class */ (function () {
        function NavController(stateService, scope, rootScope, storageService) {
            var self = this;
            self.stateService = stateService;
            self.$scope = scope;
            self.$rootScope = rootScope;
            self.storageService = storageService;
            var signedIn = self.isUserSignedIn();
            if (signedIn) {
                self.signedInSuccessfully();
            }
            //self.$rootScope.$on("signedin", self.signedInSuccessfully);
            self.$rootScope.$on("signedin", function () { self.signedInSuccessfully(); });
            self.$rootScope.$on("signedout", function () { self.signedOutSuccessfully(); });
        }
        NavController.prototype.signedInSuccessfully = function () {
            var self = this;
            console.log('signedInSuccessfully: ');
            // get user data from local storage
            var userInfo = this.loadUserInfo();
            if (userInfo) {
                console.log(userInfo);
                self.user = userInfo;
            }
            // set the data to variable , that will automatically display the data to view. 
            self.isSignedIn = true;
            self.stateService.go(userInfo.landingRoute);
        };
        NavController.prototype.signedOutSuccessfully = function () {
            console.log('signedOutSuccessfully: ');
            var self = this;
            self.isSignedIn = false;
            self.storageService.remove(App.LocalStorageKeys.UserInfo);
            self.stateService.go('root.signin');
        };
        NavController.prototype.isUserSignedIn = function () {
            var self = this;
            var userInfo = self.loadUserInfo();
            return userInfo != null;
        };
        NavController.prototype.singout = function () {
            var self = this;
            self.$rootScope.$broadcast("signedout");
        };
        NavController.prototype.loadUserInfo = function () {
            var userInfo = this.storageService.get(App.LocalStorageKeys.UserInfo);
            return userInfo;
        };
        NavController.$inject = ["$state", "$scope", "$rootScope", "LocalStorageService"];
        return NavController;
    }());
    angular.module("app").controller("NavController", NavController);
})(App || (App = {}));
//# sourceMappingURL=nav.controller.js.map