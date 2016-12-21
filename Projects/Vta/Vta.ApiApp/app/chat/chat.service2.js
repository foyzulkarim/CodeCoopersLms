angular.module('vta').service('chatService', [
    'authService', function(authService) {
        var connectionHub = new (function () {
            var self = this;
            var vtaConnectionHub = null;
            var isStarted = false;
            var onMessageCallback = function() {};

            self.isStarted = function() {
                return isStarted;
            }

            self.start = function () {
               // $.signalR.ajaxDefaults.headers = { Authorization: "Bearer " + $.connection.hub.qs.Bearer };
                vtaConnectionHub = $.connection.vtaConnectionHub;
                vtaConnectionHub.client.onMessage = onMessageCallback;
                return $.connection.hub.start()
                    .done(function() {
                        isStarted = true;
                       // console.log('connected in wrapper. id: ' + $.connection.hub.id);
                        self.sendMessage('sending welcome message to all. i am ' + $.connection.hub.qs.username + ' you are? ');
                    });
            };

            self.stop = function() {
                isStarted = false;
                vtaConnectionHub = null;
                self.clearToken();
                return $.connection.hub.stop();
            };

            self.sendMessage = function(message) {
                if (isStarted) {
                    vtaConnectionHub.server.sendMessage(message);
                };
            };

            self.onMessage = function(callback) {
                onMessageCallback = callback;
                if (isStarted)
                    vtaConnectionHub.client.onMessage = onMessageCallback;
            };

            self.useToken = function (accountInfo) {
                var authToken = accountInfo.authToken;
                var accessToken = accountInfo.accessToken;
                var username = accountInfo.userName;
                if (accessToken && username) {
                    var wasStarted = isStarted;
                    if (isStarted)
                        self.stop();
                    $.connection.hub.qs = { username: username, authToken: authToken};
                    if (wasStarted)
                        self.start();
                }              
            };
             
            self.clearToken = function() {
                $.connection.hub.qs = { };
            }
        })();
  
        connectionHub.onMessage(function(userName, message) {
          //  console.log(userName + message);
        });

        this.connect = function () {
            if (!connectionHub.isStarted()) {
                connectionHub.clearToken();
                connectionHub.useToken(authService.accountInfo);

                connectionHub.start().done(function () {
                   // console.log(connectionHub);
                });
            }
        }

        this.disconnect = function() {
            if (connectionHub.isStarted()) {
                connectionHub.stop();
            }
        }
      
    }
]);