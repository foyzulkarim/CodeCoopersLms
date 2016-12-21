module Vta {
    "use strict";

    export class RegisterController {

        private authService: AuthService;
        User: RegisterRequest;
        private stateService: angular.ui.IStateService;
        Notification: Notification;
        IsDisabled: boolean;

        static $inject = ["authService", "$state"];

        constructor(
            authService: AuthService, $state: angular.ui.IStateService) {
            this.authService = authService;
            this.stateService = $state;
            var acc = this.authService.accountInfo;
            if (acc && acc.isAuth) {
                this.stateService.go("home");
            }
            this.Notification = new Notification();
            this.Notification.IsError = false;
            this.Notification.IsInfo = false;
            this.IsDisabled = false;
        }

        register(): void {

            var self = this;
            self.IsDisabled = true;
            var successCallback = (response: RegisterResponse): any => {
                self.stateService.go("signin");
                console.log(response);
                self.IsDisabled = false;
                return response;
            };
            var errorCallback = (errorResponse: any): any => {
                self.IsDisabled = false;
                console.log(errorResponse);
                alert(errorResponse.data.Message);
                self.Notification.IsError = true;
                if (errorResponse.status === 500) {
                    self.Notification.Message = errorResponse.data.ExceptionMessage;
                } else {
                   self.Notification.Message = errorResponse.data.ModelState[""][0];                    
                }

            };
            self.authService.register(self.User).then(successCallback, errorCallback);
        }


    }

    angular.module("vta").controller("RegisterController", RegisterController);
}