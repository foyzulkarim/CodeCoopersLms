var App;
(function (App) {
    var BaseService = /** @class */ (function () {
        function BaseService(baseRepository, q, modelUrl) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.baseApiUrl = App.AppConstants.BaseApiUrl;
            this.modelUrl = modelUrl; // 'teacher' / 'student' etc
        }
        BaseService.prototype.save = function (data) {
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
            data.id = "1";
            data.created = new Date();
            data.modified = new Date();
            data.createdBy = "me";
            data.modifiedBy = "me";
            var url = self.baseApiUrl + self.modelUrl + "/Add";
            self.baseRepository.post(url, data).then(successCallback, errorCallback);
            return deffered.promise;
        };
        BaseService.prototype.search = function (request) {
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
            var url = self.baseApiUrl + self.modelUrl + "Query/Search";
            self.baseRepository.post(url, request).then(successCallback, errorCallback);
            return deffered.promise;
        };
        return BaseService;
    }());
    App.BaseService = BaseService;
})(App || (App = {}));
//# sourceMappingURL=BaseService.js.map