module Vta {
    "use strict";

    export class AuthService extends BaseService {
        private localStorageService: angular.local.storage.ILocalStorageService;
        accountInfo: AccountInfo;

        static $inject = ["$q", "localStorageService", "urlService", "webService"];

        constructor($q: angular.IQService, localStorageService: angular.local.storage.ILocalStorageService, urlService: UrlService, webService: WebService) {
            super($q, urlService, webService);
            this.localStorageService = localStorageService;
        }

        signin(request: SigninRequest): angular.IPromise<AccountInfo> {
            var self = this;
            self.signout();
            var deffered = self.q.defer();
            var data = `username=${request.email}&password=${request.password}&grant_type=password`;
            self.web.postUrlencodedForm(self.url.SigninUrl, data).then((result: any): any => {
                self.accountInfo = new AccountInfo();
                self.accountInfo.userName = result.data.userName;
                self.accountInfo.authToken = result.data.AuthToken;
                self.accountInfo.accessToken = result.data.access_token;
                self.accountInfo.isAuth = true;
                self.localStorageService.set("authorizationData", self.accountInfo);
                deffered.resolve(self.accountInfo);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

        signout(): void {
            this.localStorageService.remove("authorizationData");
            this.accountInfo = null;
        }

        fillAuthData(): void {
            var authData = this.localStorageService.get("authorizationData");
            if (authData) {
                this.accountInfo = ((authData) as AccountInfo);
            }

        }

        isSignedIn(): boolean {
            if (this.accountInfo == null) {
                return false;
            }
            return this.accountInfo.isAuth;
        }


        register(request: RegisterRequest): angular.IPromise<RegisterResponse> {
            var self = this;
            self.signout();
            var deffered = self.q.defer();
            self.web.post(self.url.RegisterUrl, request).then((result: any): any => {
                var response = new RegisterResponse(true, result.data, "Success");
                response.UserName = result.data.userName;
                response.IsRegistered = true;
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }
    }

    angular.module("vta").service("authService", AuthService);
}