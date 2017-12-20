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
        user: User;
        $scope : angular.IScope;

        static $inject = ["$state", "$scope","AccountService","WebService"];
        constructor(state: angular.ui.IStateService, scope: angular.IScope, account: AccountService, web : WebService) {
            console.log('i am in signin');
            this.web = web;
            this.account = account;
            this.user = new User();
        }

        signin(): void {
            // call web service 
            var self = this;

            let errorCallback = function(response) {
                console.error(response);
            };

            let successCallback = function(response) {
                self.$scope.$broadcast("signedin", response.data);
            };

            self.account.signin(self.user.email, self.user.password).then(successCallback,errorCallback);
        }
    }

    angular.module('app').controller('SigninController', (SigninController) as any);


}