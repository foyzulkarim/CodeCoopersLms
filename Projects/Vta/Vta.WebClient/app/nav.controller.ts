module Vta {
    "use strict";

    export class NavController {

        private authService: AuthService;
        user: AccountInfo;
        private stateService: angular.ui.IStateService;
        isSignedIn: boolean;
        private rootScopeService: angular.IRootScopeService;

        static $inject = ["authService", "$state", "$rootScope"];

        constructor(authService: AuthService, $state: angular.ui.IStateService, $rootScope: angular.IRootScopeService) {
            var self = this;
            self.authService = authService;
            self.stateService = $state;
            self.rootScopeService = $rootScope;
            var acc = self.authService.accountInfo;
            if (acc && acc.isAuth) {
                self.loadUser();
            } else {
                self.isSignedIn = false;
            }
            self.rootScopeService.$on("signedIn", (event, args) => {
                console.log(event);
                self.loadUser();
            });

        }

        private loadUser(): void {
            this.user = this.authService.accountInfo;
            this.isSignedIn = this.authService.isSignedIn();
        }

        singout(): void {
            this.authService.signout();
            this.loadUser();
        }
    }

    angular.module("vta").controller("NavController", NavController);
}