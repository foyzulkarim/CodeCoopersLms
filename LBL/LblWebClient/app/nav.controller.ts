module App {
    "use strict";

    export class NavController {
        
        stateService: angular.ui.IStateService;
        isSignedIn: boolean;
        private rootScopeService: angular.IRootScopeService;
        authData: AuthData;        
        accountService: AccountService;
        user: User;

        static $inject = ["AccountService", "$state"];

        constructor(accountService: AccountService, stateService: angular.ui.IStateService) {
            var self = this;            
            self.accountService = accountService;
            self.stateService = stateService;
            self.isUserSignedIn();
            self.authData = new AuthData();
            self.reset();
        }

        isUserSignedIn(): void {
            var self = this;
            self.authData = JSON.parse(localStorage.getItem("AuthData"));
            if (self.authData == null) {
                self.isSignedIn = false;
            } else {
                self.isSignedIn = true;
            }
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
                    alert("Sign in successfull");
                    //let home = "root.home";
                    self.authData.token = response.data.access_token;
                    self.authData.tokenType = response.data.token_type;
                    self.authData.userName = response.data.userName;
                    self.authData.landingRoute = response.data.landingRoute;
                    localStorage.setItem("AuthData", JSON.stringify(self.authData));
                    let landingRoute = response.data.landingRoute;
                    self.stateService.go(landingRoute);
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