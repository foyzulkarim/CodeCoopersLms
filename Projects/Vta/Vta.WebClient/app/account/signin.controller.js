var Vta;
(function (Vta) {
    "use strict";
    var SigninController = (function () {
        function SigninController(authService, $state, $rootScope) {
            this.authService = authService;
            this.stateService = $state;
            this.rootScopeService = $rootScope;
            var acc = this.authService.accountInfo;
            if (acc && acc.isAuth) {
                this.stateService.go("home");
            }
        }
        SigninController.prototype.signin = function () {
            var self = this;
            var signinSuccess = function (response) {
                self.stateService.go("home");
                console.log(response);
                self.rootScopeService.$broadcast("signedIn");
                return response;
            };
            self.authService.signin(new Vta.SigninRequest(self.user.email, self.user.password)).then(signinSuccess);
        };
        SigninController.$inject = ["authService", "$state", "$rootScope"];
        return SigninController;
    }());
    Vta.SigninController = SigninController;
    angular.module("vta").controller("SigninController", SigninController);
})(Vta || (Vta = {}));
//# sourceMappingURL=signin.controller.js.map