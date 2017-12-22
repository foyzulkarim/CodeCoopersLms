module App {
    "use strict";

    export class NavController {
        
        stateService: angular.ui.IStateService;
        isSignedIn: boolean;
        private rootScopeService: angular.IRootScopeService;
        authData: UserInfo;        
        accountService: AccountService;
        user: RegisterRequest;
        $scope : angular.IScope;

        static $inject = ["AccountService", "$state", "$scope"];

        constructor(accountService: AccountService, stateService: angular.ui.IStateService, scope: angular.IScope) {
            var self = this;            
            self.accountService = accountService;
            self.stateService = stateService;
            self.$scope = scope;
            self.isUserSignedIn();
            self.authData = new UserInfo();
            self.reset();
            self.$scope.$on("signedIn", self.signedInSuccessfully);
            self.$scope.$on("signedOut", self.signedOutSuccessfully);
        }

        signedInSuccessfully(source: any, q: any): void {
            console.log('signedInSuccessfully: ');
            console.log(source, q);
            source.targetScope.vm1.isSignedIn = true;
            source.currentScope.vm1.isSignedIn = true;
        }

        signedOutSuccessfully(source: any): void {
            console.log('signedOutSuccessfully: ');
            //this.isSignedIn = false;
            source.targetScope.vm1.isSignedIn = false;
            source.currentScope.vm1.isSignedIn = false;
        }

        isUserSignedIn(): void {
            var self = this;
            self.authData = JSON.parse(localStorage.getItem("AuthData"));
            if (self.authData == null) {
                self.isSignedIn = false;
            } else {
                self.isSignedIn = true;
                self.stateService.go(self.authData.landingRoute);
            }
        }

        signUpUser(): void {
            var self = this;

            let successCallback = function (response) {
                if (response.status == AppConstants.StatusOk) {
                    alert("Thank you for siging up to CodeCoopers");
                    self.reset();
                } else if (response.status == AppConstants.StatusBad) {
                    alert("Sign up failed");
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
                    
                    self.authData.token = response.data.access_token;
                    self.authData.tokenType = response.data.token_type;
                    self.authData.userName = response.data.userName;
                    self.authData.landingRoute = response.data.landingRoute;
                    localStorage.setItem("AuthData", JSON.stringify(self.authData));
                    localStorage.setItem('allowed-resources',response.data.resources);
                    //let landingRoute = response.data.landingRoute;
                    //location.reload();
                    self.$scope.$broadcast("signedIn", response.data);
                    self.stateService.go('root.home');
                    //self.stateService.go(landingRoute);
                } else {
                    alert("Sign in failed");
                }
            }

            let errorCallback = function (response) {
                console.error(response);
            }

            self.accountService.signin(self.user.email, self.user.password).then(successCallback, errorCallback);
        }

        singout(): void {
            var self = this;
            localStorage.removeItem("AuthData");
            localStorage.removeItem('allowed-resources');
            //this.stateService.go('root.SignIn');
            self.$scope.$broadcast("signedOut");
        }

        reset(): void {
            var self = this;
            self.user = new RegisterRequest();
        }
        
    }

    angular.module("app").controller("NavController", NavController);
}