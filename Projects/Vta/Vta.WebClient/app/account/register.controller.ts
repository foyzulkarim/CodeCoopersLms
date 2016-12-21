module Vta {
    "use strict";

    export class RegisterController {

        private authService: AuthService;
        user: RegisterRequest;
        private stateService: angular.ui.IStateService;
        notification: Notification;

        static $inject = ["authService", "$state"];

        constructor(
            authService: AuthService, $state: angular.ui.IStateService) {
            this.authService = authService;
            this.stateService = $state;
            var acc = this.authService.accountInfo;
            if (acc && acc.isAuth) {
                this.stateService.go("home");
            }
            this.notification = new Notification();
            this.notification.isError = false;
            this.notification.isInfo = false;

        }

        register(): void {
            var self = this;
            var successCallback = (response: RegisterResponse): any => {
                self.stateService.go("home");
                console.log(response);
                return response;
            };
            var errorCallback = (errorResponse: any): any => {
                console.log(errorResponse);
            };
            self.authService.register(self.user).then(successCallback, errorCallback);
        }


    }

    angular.module("vta").controller("RegisterController", RegisterController);
}