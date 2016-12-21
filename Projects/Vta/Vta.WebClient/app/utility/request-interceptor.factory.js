var Vta;
(function (Vta) {
    "use strict";
    var RequestInterceptor = (function () {
        function RequestInterceptor(q, 
            //  accountFactory: Vta.AccountFactory,
            //  state: angular.ui.IStateService,
            localStorageService) {
            this.qService = q;
            this.localStorageService = localStorageService;
            //   this.accountService = accountFactory;
            //    this.state = state;
        }
        RequestInterceptor.prototype.request = function (config) {
            config.headers = config.headers || {};
            var authData = this.localStorageService.get("authorizationData");
            if (authData) {
                var accountInfo = (authData);
                config.headers = {
                    'Authorization': "Bearer " + accountInfo.accessToken
                };
            }
            return config;
        };
        RequestInterceptor.prototype.responseError = function (rejection) {
            if (rejection.status === 401) {
            }
            return this.qService.reject(rejection);
        };
        //  private accountService: AccountFactory;
        // private state: angular.ui.IStateService;
        RequestInterceptor.$inject = ["$q", "localStorage"];
        return RequestInterceptor;
    })();
    Vta.RequestInterceptor = RequestInterceptor;
    angular.module("vta").service("requestInterceptor", RequestInterceptor);
})(Vta || (Vta = {}));
//# sourceMappingURL=request-interceptor.factory.js.map