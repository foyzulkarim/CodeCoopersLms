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
            self.isUserSignedIn();
            //self.$rootScope.$on("signedin", self.signedInSuccessfully);
            self.$rootScope.$on("signedin", function () { self.signedInSuccessfully(); });
            self.$rootScope.$on("signedout", self.signedOutSuccessfully);
        }
        NavController.prototype.signedInSuccessfully = function () {
            console.log('signedInSuccessfully: ');
            // get user data from local storage
            var userInfo = this.storageService.get(App.LocalStorageKeys.UserInfo);
            if (userInfo) {
                console.log(userInfo);
            }
            // set the data to variable , that will automatically display the data to view. 
        };
        NavController.prototype.signedOutSuccessfully = function (source) {
            console.log('signedOutSuccessfully: ', source);
            //this.isSignedIn = false;           
        };
        NavController.prototype.isUserSignedIn = function () {
            var self = this;
        };
        NavController.prototype.singout = function () {
            var self = this;
            self.$scope.$broadcast("signedout");
        };
        NavController.$inject = ["$state", "$scope", "$rootScope", "LocalStorageService"];
        return NavController;
    }());
    angular.module("app").controller("NavController", NavController);
})(App || (App = {}));
//# sourceMappingURL=nav.controller.js.map