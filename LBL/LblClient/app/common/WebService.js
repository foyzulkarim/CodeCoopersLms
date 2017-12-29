var App;
(function (App) {
    var AppConstants = /** @class */ (function () {
        function AppConstants() {
        }
        AppConstants.BaseUrl = "http://localhost:30285/";
        AppConstants.StatusOk = 200;
        AppConstants.StatusBad = 400;
        AppConstants.BaseApiUrl = AppConstants.BaseUrl + "api/";
        AppConstants.UserAuthenticationUrl = AppConstants.BaseUrl + "token";
        AppConstants.Account = "Account/";
        return AppConstants;
    }());
    App.AppConstants = AppConstants;
    var WebService = /** @class */ (function () {
        function WebService($q, $http) {
            this.qService = $q;
            this.httpService = $http;
        }
        WebService.prototype.post = function (url, data) {
            var self = this;
            var deffered = self.qService.defer();
            self.httpService.post(url, data).then(function (result) {
                if (result.status === 200) {
                    deffered.resolve(result);
                }
                else {
                    deffered.reject(result);
                }
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        WebService.prototype.put = function (url, data) {
            var self = this;
            var deffered = self.qService.defer();
            self.httpService.put(url, data).then(function (result) {
                if (result.status === 200) {
                    deffered.resolve(result);
                }
                else {
                    deffered.reject(result);
                }
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        WebService.prototype.postUrlencodedForm = function (url, data) {
            var self = this;
            var deffered = self.qService.defer();
            var config = {
                //headers: { 'Content-Type': "application/x-www-form-urlencoded" }
                headers: {}
            };
            config.headers["Content-Type"] = "application/x-www-form-urlencoded";
            self.httpService.post(url, data, config).then(function (result) {
                if (result.status === 200) {
                    deffered.resolve(result);
                }
                else {
                    deffered.reject(result);
                }
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        WebService.prototype.get = function (url) {
            var self = this;
            var deffered = self.qService.defer();
            self.httpService.get(url).then(function (result) {
                if (result.status === 200) {
                    deffered.resolve(result);
                }
                else {
                    deffered.reject(result);
                }
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        WebService.prototype.delete = function (url) {
            var self = this;
            var deffered = self.qService.defer();
            self.httpService.delete(url).then(function (result) {
                if (result.status === 200) {
                    deffered.resolve(result);
                }
                else {
                    deffered.reject(result);
                }
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        WebService.$inject = ["$q", "$http"];
        return WebService;
    }());
    App.WebService = WebService;
    angular.module("app").service("WebService", WebService);
})(App || (App = {}));
//# sourceMappingURL=WebService.js.map