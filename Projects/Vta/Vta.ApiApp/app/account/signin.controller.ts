module Vta {
    "use strict";

    export class SigninController {

        private authService: AuthService;
        user: SigninRequest;
        private stateService: angular.ui.IStateService;
        private rootScopeService: angular.IRootScopeService;
        showErrorMessage: boolean;

        static $inject = ["authService", "$state", "$rootScope"];

        constructor(
            authService: AuthService,
            $state: angular.ui.IStateService,
            $rootScope: angular.IRootScopeService
        ) {
            this.authService = authService;
            this.stateService = $state;
            this.rootScopeService = $rootScope;
            var acc = this.authService.accountInfo;
            if (acc && acc.isAuth) {
                this.stateService.go("home");
            }
        }

        signin(): void {
            var self = this;
            var signinSuccess = (response: AccountInfo): void => {
                self.stateService.go("home");
                console.log(response);
                self.rootScopeService.$broadcast("signedIn");
            };
            var signinError = (error: any): void => {
                console.log(error);
                self.showErrorMessage = true;
            };
            self.authService.signin(new SigninRequest(self.user.email, self.user.password)).then(signinSuccess, signinError);
        }


    }

    angular.module("vta").controller("SigninController", SigninController);
}