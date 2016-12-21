module Vta {
    "use strict";

    export class RequestInterceptor {

        private qService: angular.IQService;
        private localStorageService: angular.local.storage.ILocalStorageService;
        //  private accountService: AccountFactory;
        // private state: angular.ui.IStateService;


        static $inject = ["$q", "localStorage"];

        constructor(
            q: angular.IQService,
            //  accountFactory: Vta.AccountFactory,
            //  state: angular.ui.IStateService,
            localStorageService: angular.local.storage.ILocalStorageService) {
            this.qService = q;
            this.localStorageService = localStorageService;
            //   this.accountService = accountFactory;
            //    this.state = state;
        }

        request(config: angular.IRequestShortcutConfig): angular.IRequestShortcutConfig {
            config.headers = config.headers || {};
            var authData = this.localStorageService.get("authorizationData");
            if (authData) {
                var accountInfo = (authData) as AccountInfo;
                config.headers = {
                    'Authorization': `Bearer ${accountInfo.accessToken}`
                };
            }

            return config;
        }

        responseError(rejection: any): angular.IPromise<any> {
            if (rejection.status === 401) {
                //   this.accountService.signout();
                // this.state.go('/signin');
            }
            return this.qService.reject(rejection);
        }


    }

    angular.module("vta").service("requestInterceptor", RequestInterceptor);
}