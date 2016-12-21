module Vta {
    'use strict';

    export class ChatService {
        authService: AuthService;

        static $inject = ["authService"];

        constructor(authService: AuthService) {
            console.log('i m in chat service');
            this.authService = authService;
        }

        connect(): void {
            var self = this;
           // var connection = $.hubConnection();
           // var hub = $.hub;
           // var contosoChatHubProxy = connection.createHubProxy('chatHub');            
           // var accessToken = self.authService.accountInfo.authToken;
           //// connection.qs = { Authorization: accessToken };
           // contosoChatHubProxy.on('broadcastMessage', function (name, message) {
           //     console.log(name + ' ' + message);
           // });
           // document.cookie = "BearerToken=" + accessToken + "; path=/;Username="+self.authService.accountInfo.userName;

           // connection.start().done(function() {
           //     console.log('connected');
           // });
            
            //var accessToken = self.authService.accountInfo.accessToken;
            //$.connection.hub.qs = { Authorization: accessToken };
            //$.connection.hub.start().done(function() {
            //    console.log('done. connected');
            //});
        }

        disconnect(): void {

        }

    }

    angular.module('vta').service('chatService', ChatService);
}