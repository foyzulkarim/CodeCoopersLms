module App {

    class HomeController {

        static $inject = ["$state", "$scope", "$rootScope", "LocalStorageService"];
        stateService: angular.ui.IStateService;
        isSignedIn: boolean;
        user: UserInfo;

        constructor(stateService: angular.ui.IStateService,
            scope: angular.IScope,
            rootScope: angular.IRootScopeService,
            storageService: LocalStorageService) {
            console.log('i am in home');
            var self = this;
            let userInfo = storageService.get(LocalStorageKeys.UserInfo) as UserInfo;
            if (userInfo) {
                this.signedInSuccessfully();
            } else {
                this.signedOutSuccessfully();
            }

            rootScope.$on("signedout", () => { self.signedOutSuccessfully(); });

        }

        message: string;
        values: number[] = [];

        signedOutSuccessfully(): void {
            this.isSignedIn = false;
            this.message = "";
        }

        signedInSuccessfully(): void {
            let self = this;
            self.isSignedIn = true;
            this.message = new Date().toDateString();
            for (let i = 0; i < 10; i++) {
                self.values.push(i);
            }
        }
    }

    angular.module('app').controller('HomeController', (HomeController) as any);
}