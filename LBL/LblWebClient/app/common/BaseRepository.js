var App;
(function (App) {
    var BaseRepository = (function () {
        function BaseRepository(http, q) {
            this.http = http;
            this.q = q;
            //this.baseUrl = AppConstants.BaseApiUrl;
        }
        BaseRepository.prototype.post = function (subUrl, data) {
            var self = this;
            var deffered = self.q.defer();
            var successCallback = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var errorCallback = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.post(App.AppConstants.BaseApiUrl + subUrl, data).then(successCallback, errorCallback);
            return deffered.promise;
        };
        BaseRepository.prototype.postUrlencodedForm = function (data) {
            var self = this;
            var deffered = self.q.defer();
            var config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            var successCallback = function (successresponse) {
                //console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var errorCallback = function (errorResponse) {
                //console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.post(App.AppConstants.UserAuthenticationUrl, data, config).then(successCallback, errorCallback);
            return deffered.promise;
        };
        return BaseRepository;
    }());
    BaseRepository.$inject = ["$http", "$q"];
    App.BaseRepository = BaseRepository;
    angular.module('app').service('BaseRepository', BaseRepository);
})(App || (App = {}));
//# sourceMappingURL=BaseRepository.js.map