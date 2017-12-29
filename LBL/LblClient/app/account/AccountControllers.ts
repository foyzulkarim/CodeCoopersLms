module App {

    class RegistrationController {
        constructor() {
            console.log('i am in regsiter');
        }
    }

    angular.module('app').controller('RegistrationController', (RegistrationController) as any);

    export class SigninController {

        web: WebService;
        account: AccountService;
        user: RegisterRequest;
        $scope: angular.IScope;
        $rootScope: angular.IRootScopeService;
        localStorage: LocalStorageService;

        static $inject = ["$state", "$scope", "$rootScope", "LocalStorageService","AccountService","WebService"];
        constructor(state: angular.ui.IStateService, scope: angular.IScope,
            rootScope: angular.IRootScopeService, localStorageService: LocalStorageService, account: AccountService, web: WebService) {
            console.log('i am in signin');
            this.web = web;
            this.$scope = scope;
            this.$rootScope = rootScope;
            this.localStorage = localStorageService;
            this.account = account;
            let signedIn = this.localStorage.get(LocalStorageKeys.UserInfo) as UserInfo;
            if (signedIn) {
                state.go('root.home');
            }

            this.user = new RegisterRequest();
          
        }
         

        signin(): void {
            // call web service 
            var self = this;

            let errorCallback = function(response) {
                console.error(response);
            };

            let successCallback = function (response) {
                console.log('successCallback fired. ', response);
                //self.$scope.$broadcast("signedin", response.data);                
                self.$rootScope.$broadcast("signedin");
            };

            console.log('signin fired. ', self);
            self.account.signin(self.user.email, self.user.password).then(successCallback,errorCallback);
        }

        register(): void {
            // call web service 
            var self = this;

            let errorCallback = function (response) {
                console.error(response);
            };

            let successCallback = function (response) {
                console.log('successCallback fired. ', response);
                //self.$scope.$broadcast("signedin", response.data);                
                self.$rootScope.$broadcast("signedin");
            };

            console.log('register fired. ', self);
            self.account.register(self.user).then(successCallback, errorCallback);
        }
    }

    angular.module('app').controller('SigninController', (SigninController) as any);


}