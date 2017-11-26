var App;
(function (App) {
    var BaseService = (function () {
        function BaseService(baseRepository, q, url) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.commandUrl = url;
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
            self.baseRepository.post(self.commandUrl, data).then(successCallback, errorCallback);
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
            self.baseRepository.post(self.commandUrl + "Query", request).then(successCallback, errorCallback);
            return deffered.promise;
        };
        return BaseService;
    }());
    BaseService.$inject = ["BaseRepository", "$q"];
    App.BaseService = BaseService;
})(App || (App = {}));
//# sourceMappingURL=BaseService.js.map