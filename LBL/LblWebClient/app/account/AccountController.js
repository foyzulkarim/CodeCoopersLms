var App;
(function (App) {
    var ApiResponseStatus = (function () {
        function ApiResponseStatus() {
        }
        return ApiResponseStatus;
    }());
    ApiResponseStatus.statusOk = 200;
    ApiResponseStatus.statusBad = 400;
    App.ApiResponseStatus = ApiResponseStatus;
    var AccountService = (function () {
        function AccountService(baseRepository, q) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.subUrl = new App.UrlService().account;
            this.reset();
        }
        AccountService.prototype.register = function () {
            var self = this;
            var deferred = self.q.defer();
            var successCallback = function (response) {
                deferred.resolve(response);
            };
            var errorCallback = function (response) {
                deferred.reject(response);
            };
            self.baseRepository.post(self.subUrl + "/Register", self.user).then(successCallback, errorCallback);
            return deferred.promise;
        };
        AccountService.prototype.signin = function (username, password) {
            var self = this;
            var deferred = self.q.defer();
            var successCallback = function (response) {
                deferred.resolve(response);
            };
            var errorCallback = function (response) {
                deferred.reject(response);
            };
            self.baseRepository.post(self.subUrl + "/SignIn?userName=" + username + "&password=" + password, null).then(successCallback, errorCallback);
            return deferred.promise;
        };
        AccountService.prototype.reset = function () {
            var self = this;
            self.user = new App.User();
        };
        return AccountService;
    }());
    AccountService.$inject = ["BaseRepository", "$q"];
    App.AccountService = AccountService;
    angular.module('app').service('AccountService', AccountService);
})(App || (App = {}));
//# sourceMappingURL=AccountController.js.map