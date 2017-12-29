var App;
(function (App) {
    var RegistrationController = /** @class */ (function () {
        function RegistrationController() {
            console.log('i am in regsiter');
        }
        return RegistrationController;
    }());
    angular.module('app').controller('RegistrationController', (RegistrationController));
    var SigninController = /** @class */ (function () {
        function SigninController(state, scope, rootScope, localStorageService, account, web) {
            console.log('i am in signin');
            this.web = web;
            this.$scope = scope;
            this.$rootScope = rootScope;
            this.localStorage = localStorageService;
            this.account = account;
            var signedIn = this.localStorage.get(App.LocalStorageKeys.UserInfo);
            if (signedIn) {
                state.go('root.home');
            }
            this.user = new App.RegisterRequest();
        }
        SigninController.prototype.signin = function () {
            // call web service 
            var self = this;
            var errorCallback = function (response) {
                console.error(response);
            };
            var successCallback = function (response) {
                console.log('successCallback fired. ', response);
                //self.$scope.$broadcast("signedin", response.data);                
                self.$rootScope.$broadcast("signedin");
            };
            console.log('signin fired. ', self);
            self.account.signin(self.user.email, self.user.password).then(successCallback, errorCallback);
        };
        SigninController.prototype.register = function () {
            // call web service 
            var self = this;
            var errorCallback = function (response) {
                console.error(response);
            };
            var successCallback = function (response) {
                console.log('successCallback fired. ', response);
                //self.$scope.$broadcast("signedin", response.data);                
                self.$rootScope.$broadcast("signedin");
            };
            console.log('register fired. ', self);
            self.account.register(self.user).then(successCallback, errorCallback);
        };
        SigninController.$inject = ["$state", "$scope", "$rootScope", "LocalStorageService", "AccountService", "WebService"];
        return SigninController;
    }());
    App.SigninController = SigninController;
    angular.module('app').controller('SigninController', (SigninController));
})(App || (App = {}));
//# sourceMappingURL=AccountControllers.js.map