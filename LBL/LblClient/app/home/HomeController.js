var App;
(function (App) {
    var HomeController = /** @class */ (function () {
        function HomeController(stateService, scope, rootScope, storageService) {
            this.values = [];
            console.log('i am in home');
            var self = this;
            var userInfo = storageService.get(App.LocalStorageKeys.UserInfo);
            if (userInfo) {
                this.signedInSuccessfully();
            }
            else {
                this.signedOutSuccessfully();
            }
            rootScope.$on("signedout", function () { self.signedOutSuccessfully(); });
        }
        HomeController.prototype.signedOutSuccessfully = function () {
            this.isSignedIn = false;
            this.message = "";
        };
        HomeController.prototype.signedInSuccessfully = function () {
            var self = this;
            self.isSignedIn = true;
            this.message = new Date().toDateString();
            for (var i = 0; i < 10; i++) {
                self.values.push(i);
            }
        };
        HomeController.$inject = ["$state", "$scope", "$rootScope", "LocalStorageService"];
        return HomeController;
    }());
    angular.module('app').controller('HomeController', (HomeController));
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map