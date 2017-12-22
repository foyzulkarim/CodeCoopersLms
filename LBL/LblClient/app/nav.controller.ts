module App {
    "use strict";

    class NavController {

        stateService: angular.ui.IStateService;
        isSignedIn: boolean;
        $rootScope: angular.IRootScopeService;
        $scope: angular.IScope;

        storageService: LocalStorageService;

        static $inject = ["$state", "$scope", "$rootScope", "LocalStorageService"];

        constructor(stateService: angular.ui.IStateService, scope: angular.IScope, rootScope: angular.IRootScopeService, storageService: LocalStorageService) {
            var self = this;
            self.stateService = stateService;
            self.$scope = scope;
            self.$rootScope = rootScope;
            self.storageService = storageService;
            self.isUserSignedIn();

            //self.$rootScope.$on("signedin", self.signedInSuccessfully);
            self.$rootScope.$on("signedin", () => { self.signedInSuccessfully(); });
            self.$rootScope.$on("signedout", self.signedOutSuccessfully);
        }

        signedInSuccessfully(): void {
            console.log('signedInSuccessfully: ');
            // get user data from local storage
            let userInfo = this.storageService.get(LocalStorageKeys.UserInfo) as UserInfo;
            if (userInfo) {
                console.log(userInfo);
            }
            // set the data to variable , that will automatically display the data to view. 
        }

        signedOutSuccessfully(source: any): void {
            console.log('signedOutSuccessfully: ', source);
            //this.isSignedIn = false;           
        }

        isUserSignedIn(): void {
            var self = this;

        }


        singout(): void {
            var self = this;
            self.$scope.$broadcast("signedout");
        }

    }

    angular.module("app").controller("NavController", NavController as any);
}