module Vta {
    "use strict";

    export class NavController {
        
        private stateService: angular.ui.IStateService;
        isSignedIn: boolean;
        private rootScopeService: angular.IRootScopeService;

        static $inject = [];

        constructor() {
            var self = this;
            self.isSignedIn = false;
        }
        
    }

    angular.module("app").controller("NavController", NavController);
}