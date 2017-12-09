var App;
(function (App) {
    var AuthData = (function () {
        function AuthData() {
        }
        return AuthData;
    }());
    App.AuthData = AuthData;
    var AccountService = (function () {
        function AccountService(baseRepository, q) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.subUrl = new App.UrlService().account;
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
            var url = App.AppConstants.BaseApiUrl + self.subUrl + "/Register";
            self.baseRepository.post(url, user).then(successCallback, errorCallback);
            return deferred.promise;
        };
        AccountService.prototype.signin = function (username, password) {
            var self = this;
            var deferred = self.q.defer();
            var successCallback = function (response) {
                if (response.status == App.AppConstants.StatusOk) {
                    //console.log(response);
                    deferred.resolve(response);
                }
            };
            var errorCallback = function (response) {
                deferred.reject(response);
            };
            var data = "username=" + username + "&password=" + password + "&grant_type=password";
            //var data = "username=" + username + "&password=" + password + "&grant_type=password";
            self.baseRepository.postUrlencodedForm(App.AppConstants.UserAuthenticationUrl, data).then(successCallback, errorCallback);
            return deferred.promise;
        };
        return AccountService;
    }());
    AccountService.$inject = ["BaseRepository", "$q"];
    App.AccountService = AccountService;
    angular.module('app').service('AccountService', AccountService);
})(App || (App = {}));
//# sourceMappingURL=AccountService.js.map