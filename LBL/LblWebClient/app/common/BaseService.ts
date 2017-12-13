module App {

    export class BaseService<T> {
        baseRepository: BaseRepository;
        q: angular.IQService;      
        private baseApiUrl: string;
        private modelUrl: string;

        constructor(baseRepository: BaseRepository, q: angular.IQService, modelUrl: string) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.baseApiUrl = AppConstants.BaseApiUrl;
            this.modelUrl = modelUrl; // 'teacher' / 'student' etc
        }

        save(data: any): angular.IPromise<any> {
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
        }

        getSelectList(url: string): angular.IPromise<any> {
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

            self.baseRepository.get(url).then(successCallback, errorCallback);
            return deffered.promise;
        }

        search(request: any): angular.IPromise<any> {
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

            var url = self.baseApiUrl + self.modelUrl+ "Query/Search";
            self.baseRepository.post(url, request).then(successCallback, errorCallback);
            return deffered.promise;
        }
    }
}