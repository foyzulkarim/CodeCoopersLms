var App;
(function (App) {
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
            self.baseRepository.post(self.subUrl + "/Register", user).then(successCallback, errorCallback);
            return deferred.promise;
        };
        AccountService.prototype.signin = function (username, password) {
            var self = this;
            var deferred = self.q.defer();
            var successCallback = function (response) {
                if (response.status == App.AppConstants.StatusOk) {
                    //localStorage.set('authorizationData', {
                    //    token: response.data.access_token,
                    //    tokenType: response.data.token_type,
                    //    userName: response.data.userName
                    //});
                }
                deferred.resolve(response);
            };
            var errorCallback = function (response) {
                deferred.reject(response);
            };
            var data = "username=" + username + "&password=" + password + "&grant_type=password";
            self.baseRepository.postUrlencodedForm(data).then(successCallback, errorCallback);
            return deferred.promise;
        };
        return AccountService;
    }());
    AccountService.$inject = ["BaseRepository", "$q"];
    App.AccountService = AccountService;
    angular.module('app').service('AccountService', AccountService);
})(App || (App = {}));
//# sourceMappingURL=AccountService.js.map