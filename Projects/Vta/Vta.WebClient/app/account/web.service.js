var Vta;
(function (Vta) {
    "use strict";
    var WebService = (function () {
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
            var config = { headers: { 'Content-Type': "application/x-www-form-urlencoded" } };
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
        return WebService;
    }());
    WebService.$inject = ["$q", "$http"];
    Vta.WebService = WebService;
    angular.module("vta").service("webService", WebService);
})(Vta || (Vta = {}));
//# sourceMappingURL=web.service.js.map