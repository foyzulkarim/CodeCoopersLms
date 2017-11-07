var Vta;
(function (Vta) {
    "use strict";
    var RegisterController = (function () {
        function RegisterController(authService, $state) {
            this.authService = authService;
            this.stateService = $state;
            var acc = this.authService.accountInfo;
            if (acc && acc.isAuth) {
                this.stateService.go("home");
            }
            this.notification = new Vta.Notification();
            this.notification.isError = false;
            this.notification.isInfo = false;
        }
        RegisterController.prototype.register = function () {
            var self = this;
            var successCallback = function (response) {
                self.stateService.go("home");
                console.log(response);
                return response;
            };
            var errorCallback = function (errorResponse) {
                console.log(errorResponse);
            };
            self.authService.register(self.user).then(successCallback, errorCallback);
        };
        return RegisterController;
    }());
    RegisterController.$inject = ["authService", "$state"];
    Vta.RegisterController = RegisterController;
    angular.module("vta").controller("RegisterController", RegisterController);
})(Vta || (Vta = {}));
//# sourceMappingURL=register.controller.js.map