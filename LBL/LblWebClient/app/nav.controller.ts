module App {
    "use strict";

    export class NavController {
        
        stateService: angular.ui.IStateService;
        isSignedIn: boolean;
        private rootScopeService: angular.IRootScopeService;
        
        
        accountService: AccountService;
        user: User;

        static $inject = ["AccountService", "$state"];

        constructor(accountService: AccountService, stateService: angular.ui.IStateService) {
            var self = this;
            self.accountService = accountService;
            self.stateService = stateService;
            self.isSignedIn = false;
            self.reset();
        }

        signUpUser(): void {
            var self = this;

            let successCallback = function (response) {
                if (response.status == AppConstants.StatusOk) {
                    alert("Thank you for siging up to CodeCoopers");
                    self.reset();
                } else if (response.status == AppConstants.StatusBad) {
                    alert("Sign up failed")
                }
            }
            let errorCallback = function (response) {
                console.error(response);
            }

            self.accountService.register(self.user).then(successCallback, errorCallback);
        }

        signIn(): void {
            var self = this;

            let successCallback = function (response) {
                if (response.status == AppConstants.StatusOk) {
                    self.isSignedIn = true;
                    alert("Sign in successfull");
                    //let home = "root.home";
                    let landingRoute = response.data.landingRoute;
                    self.stateService.transitionTo(landingRoute);
                } else {
                    alert("Sign in failed");
                }
            }

            let errorCallback = function (response) {
                console.error(response);
            }

            self.accountService.signin(self.user.email, self.user.password).then(successCallback, errorCallback);
        }

        reset(): void {
            var self = this;
            self.user = new User();
        }
        
    }

    angular.module("app").controller("NavController", NavController);
}