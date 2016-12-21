module Vta {
    export class ChatController {

        private chatService: ChatService;
        private authService: AuthService;
        private stateService: angular.ui.IStateService;


        static $inject = ['chatService', 'authService','$state'];
        constructor(chatService: ChatService, authService: AuthService, $state: angular.ui.IStateService) {
            this.authService = authService;
            this.stateService = $state;
            var acc = this.authService.accountInfo;
            if (!acc || !acc.isAuth) {
                this.stateService.go("signin");
            } else {
                console.log('I m in chat controller');
                this.chatService = chatService;
                this.init();   
            }
        }

        init(): void {
            var self = this;            
            self.chatService.connect();
        }
    }

    angular.module('vta').controller('ChatController', ChatController);
}