module App {
    "use strict";

    class NavController {
        
        stateService: angular.ui.IStateService;
        isSignedIn: boolean;
        private rootScopeService: angular.IRootScopeService;
        $scope : angular.IScope;

        static $inject = [  "$state", "$scope"];

        constructor(  stateService: angular.ui.IStateService, scope: angular.IScope) {
            var self = this;            
             
            self.stateService = stateService;
            self.$scope = scope;
            self.isUserSignedIn();        
            self.$scope.$on("signedin", self.signedInSuccessfully);
            self.$scope.$on("signedout", self.signedOutSuccessfully);
        }

        signedInSuccessfully(source: any, q: any): void {
            console.log('signedInSuccessfully: ');
            console.log(source, q);
             
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
            self.$scope.$broadcast("signedOut");
        }
         
    }

    angular.module("app").controller("NavController", NavController as any);
}