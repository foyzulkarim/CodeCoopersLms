var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vta;
(function (Vta) {
    "use strict";
    var AuthService = (function (_super) {
        __extends(AuthService, _super);
        function AuthService($q, localStorageService, urlService, webService) {
            var _this = _super.call(this, $q, urlService, webService) || this;
            _this.localStorageService = localStorageService;
            return _this;
        }
        AuthService.prototype.signin = function (request) {
            var self = this;
            self.signout();
            var deffered = self.q.defer();
            var data = "username=" + request.email + "&password=" + request.password + "&grant_type=password";
            self.web.postUrlencodedForm(self.url.signinUrl, data).then(function (result) {
                self.accountInfo = new Vta.AccountInfo();
                self.accountInfo.userName = result.data.userName;
                self.accountInfo.authToken = result.data.AuthToken;
                self.accountInfo.accessToken = result.data.access_token;
                self.accountInfo.isAuth = true;
                self.localStorageService.set("authorizationData", self.accountInfo);
                deffered.resolve(self.accountInfo);
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        AuthService.prototype.signout = function () {
            this.localStorageService.remove("authorizationData");
            this.accountInfo = null;
        };
        AuthService.prototype.fillAuthData = function () {
            var authData = this.localStorageService.get("authorizationData");
            if (authData) {
                this.accountInfo = (authData);
            }
        };
        AuthService.prototype.isSignedIn = function () {
            if (this.accountInfo == null) {
                return false;
            }
            return this.accountInfo.isAuth;
        };
        AuthService.prototype.register = function (request) {
            var self = this;
            self.signout();
            var deffered = self.q.defer();
            self.web.post(self.url.registerUrl, request).then(function (result) {
                var response = new Vta.RegisterResponse(true, result.data, "Success");
                response.userName = result.data.userName;
                response.isRegistered = true;
                deffered.resolve(response);
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        return AuthService;
    }(Vta.BaseService));
    AuthService.$inject = ["$q", "localStorageService", "urlService", "webService"];
    Vta.AuthService = AuthService;
    angular.module("vta").service("authService", AuthService);
})(Vta || (Vta = {}));
//# sourceMappingURL=auth.service.js.map