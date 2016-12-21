module Vta {
    "use strict";

    export class NavController {
        private chatService: ChatService;
        private authService: AuthService;
        user: AccountInfo;
        private stateService: angular.ui.IStateService;
        isSignedIn: boolean;
        private rootScopeService: angular.IRootScopeService;

        static $inject = ["authService", "$state", "$rootScope","chatService"];

        constructor(authService: AuthService, $state: angular.ui.IStateService, $rootScope: angular.IRootScopeService, chatService: ChatService) {
            var self = this;
            self.authService = authService;
            self.stateService = $state;
            self.rootScopeService = $rootScope;
            self.chatService = chatService;
            var acc = self.authService.accountInfo;
            if (acc && acc.isAuth) {
                self.loadUser();
                self.chatService.connect();
            } else {
                self.isSignedIn = false;
            }
            self.rootScopeService.$on("signedIn", (event, args) => {
                console.log(event);
                self.loadUser();
                self.chatService.connect();
            });

        }

        private loadUser(): void {
            var self = this;
            self.user = this.authService.accountInfo;
            self.isSignedIn = this.authService.isSignedIn();
        }

        singout(): void {
            var self = this;
            self.authService.signout();
            self.loadUser();
            self.chatService.disconnect();
        }
    }

    angular.module("vta").controller("NavController", NavController);
}