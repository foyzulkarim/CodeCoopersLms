module App {
    "use strict";

    class NavController {

        stateService: angular.ui.IStateService;
        isSignedIn: boolean;
        $rootScope: angular.IRootScopeService;
        $scope: angular.IScope;
        user: UserInfo;

        storageService: LocalStorageService;

        static $inject = ["$state", "$scope", "$rootScope", "LocalStorageService"];

        constructor(stateService: angular.ui.IStateService,
            scope: angular.IScope,
            rootScope: angular.IRootScopeService,
            storageService: LocalStorageService) {
            var self = this;
            self.stateService = stateService;
            self.$scope = scope;
            self.$rootScope = rootScope;
            self.storageService = storageService;
            let signedIn = self.isUserSignedIn();
            if (signedIn) {
                self.signedInSuccessfully();               
            }
            

            //self.$rootScope.$on("signedin", self.signedInSuccessfully);
            self.$rootScope.$on("signedin", () => { self.signedInSuccessfully(); });
            self.$rootScope.$on("signedout", () => { self.signedOutSuccessfully(); });
        }

        signedInSuccessfully(): void {
            let self = this;
            console.log('signedInSuccessfully: ');
            // get user data from local storage
            let userInfo = this.loadUserInfo();
            if (userInfo) {
                console.log(userInfo);
                self.user = userInfo;
            }

            // set the data to variable , that will automatically display the data to view. 
            self.isSignedIn = true;
            self.stateService.go(userInfo.landingRoute);
        }

        signedOutSuccessfully(): void {
            console.log('signedOutSuccessfully: ');
            let self = this;
            self.isSignedIn = false;
            self.storageService.remove(LocalStorageKeys.UserInfo);
            self.stateService.go('root.signin');
        }

        isUserSignedIn(): boolean {
            var self = this;
            let userInfo = self.loadUserInfo();
            return userInfo != null;
        }
        
        singout(): void {
            var self = this;
            self.$rootScope.$broadcast("signedout");
        }

        private loadUserInfo(): UserInfo {
            let userInfo = this.storageService.get(LocalStorageKeys.UserInfo) as UserInfo;
            return userInfo;
        }

    }

    angular.module("app").controller("NavController", NavController as any);
}