var Vta;
(function (Vta) {
    "use strict";
    var NavController = (function () {
        function NavController(authService, $state, $rootScope) {
            var self = this;
            self.authService = authService;
            self.stateService = $state;
            self.rootScopeService = $rootScope;
            var acc = self.authService.accountInfo;
            if (acc && acc.isAuth) {
                self.loadUser();
            }
            else {
                self.isSignedIn = false;
            }
            self.rootScopeService.$on("signedIn", function (event, args) {
                console.log(event);
                self.loadUser();
            });
        }
        NavController.prototype.loadUser = function () {
            this.user = this.authService.accountInfo;
            this.isSignedIn = this.authService.isSignedIn();
        };
        NavController.prototype.singout = function () {
            this.authService.signout();
            this.loadUser();
        };
        return NavController;
    }());
    NavController.$inject = ["authService", "$state", "$rootScope"];
    Vta.NavController = NavController;
    angular.module("vta").controller("NavController", NavController);
})(Vta || (Vta = {}));
//# sourceMappingURL=nav.controller.js.map