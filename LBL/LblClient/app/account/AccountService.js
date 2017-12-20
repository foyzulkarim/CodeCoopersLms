var App;
(function (App) {
    var AuthData = /** @class */ (function () {
        function AuthData() {
        }
        return AuthData;
    }());
    App.AuthData = AuthData;
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    App.User = User;
    var AccountService = /** @class */ (function () {
        function AccountService(baseRepository, q) {
            this.baseRepository = baseRepository;
            this.q = q;
            // this.subUrl = new UrlService().account;            
        }
        //register(user: User): angular.IPromise<any> {
        //    var self = this;
        //    var deferred = self.q.defer();
        //    let successCallback = function (response) {
        //        deferred.resolve(response);
        //    }
        //    let errorCallback = function (response) {
        //        deferred.reject(response);
        //    }
        //    var url = AppConstants.BaseApiUrl + self.subUrl + "/Register";
        //    self.baseRepository.post(url, user).then(successCallback, errorCallback);
        //    return deferred.promise;
        //}
        AccountService.prototype.signin = function (username, password) {
            var self = this;
            var deferred = self.q.defer();
            var successCallback = function (response) {
                if (response.status == "Ok") {
                    //console.log(response);
                    deferred.resolve(response);
                }
            };
            var errorCallback = function (response) {
                deferred.reject(response);
            };
            var data = "username=" + username + "&password=" + password + "&grant_type=password";
            self.baseRepository.postUrlencodedForm("http://localhost:30285/token", data).then(successCallback, errorCallback);
            return deferred.promise;
        };
        AccountService.$inject = ["WebService", "$q"];
        return AccountService;
    }());
    App.AccountService = AccountService;
    angular.module('app').service('AccountService', AccountService);
})(App || (App = {}));
//# sourceMappingURL=AccountService.js.map