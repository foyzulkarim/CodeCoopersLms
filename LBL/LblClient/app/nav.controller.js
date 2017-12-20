var App;
(function (App) {
    "use strict";
    var NavController = /** @class */ (function () {
        function NavController(stateService, scope) {
            var self = this;
            self.stateService = stateService;
            self.$scope = scope;
            self.isUserSignedIn();
            self.$scope.$on("signedin", self.signedInSuccessfully);
            self.$scope.$on("signedout", self.signedOutSuccessfully);
        }
        NavController.prototype.signedInSuccessfully = function (source, q) {
            console.log('signedInSuccessfully: ');
            console.log(source, q);
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
            self.$scope.$broadcast("signedOut");
        };
        NavController.$inject = ["$state", "$scope"];
        return NavController;
    }());
    angular.module("app").controller("NavController", NavController);
})(App || (App = {}));
//# sourceMappingURL=nav.controller.js.map