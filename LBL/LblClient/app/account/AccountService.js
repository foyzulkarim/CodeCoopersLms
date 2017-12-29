var App;
(function (App) {
    var UserInfo = /** @class */ (function () {
        function UserInfo() {
        }
        return UserInfo;
    }());
    App.UserInfo = UserInfo;
    var RegisterRequest = /** @class */ (function () {
        function RegisterRequest() {
        }
        return RegisterRequest;
    }());
    App.RegisterRequest = RegisterRequest;
    var AccountService = /** @class */ (function () {
        function AccountService(baseRepository, q, storageService) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.storageService = storageService;
            // this.subUrl = new UrlService().account;            
        }
        AccountService.prototype.register = function (user) {
            var self = this;
            var deferred = self.q.defer();
            var successCallback = function (response) {
                deferred.resolve(response);
            };
            var errorCallback = function (response) {
                deferred.reject(response);
            };
            var url = App.AppConstants.BaseApiUrl + App.AppConstants.Account + "Register";
            self.baseRepository.post(url, user).then(successCallback, errorCallback);
            return deferred.promise;
        };
        AccountService.prototype.signin = function (username, password) {
            var self = this;
            var deferred = self.q.defer();
            var successCallback = function (response) {
                console.log('AccountService successCallback');
                var info = new UserInfo();
                info.landingRoute = response.data.landingRoute;
                info.userName = response.data.userName;
                info.resources = response.data.resources;
                self.storageService.save(App.LocalStorageKeys.UserInfo, info);
                deferred.resolve(response.data);
            };
            var errorCallback = function (response) {
                deferred.reject(response);
            };
            var data = "username=" + username + "&password=" + password + "&grant_type=password";
            console.log('AccountService signin');
            self.baseRepository.postUrlencodedForm("http://localhost:30285/token", data).then(successCallback, errorCallback);
            return deferred.promise;
        };
        AccountService.$inject = ["WebService", "$q", "LocalStorageService"];
        return AccountService;
    }());
    App.AccountService = AccountService;
    angular.module('app').service('AccountService', AccountService);
})(App || (App = {}));
//# sourceMappingURL=AccountService.js.map