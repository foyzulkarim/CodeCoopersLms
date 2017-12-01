module App {
    export class ApiResponseStatus {
        static statusOk = 200;
        static statusBad = 400;
    }
    export class AccountService {
        baseRepository: BaseRepository;
        q: angular.IQService;
        commandUrl: string;
        user: User;
        subUrl: string;

        static $inject = ["BaseRepository", "$q"];
        constructor(baseRepository: BaseRepository, q: angular.IQService) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.subUrl = new UrlService().account;
            this.reset();
        }

        register(): angular.IPromise<any> {
            var self = this;
            var deferred = self.q.defer();

            let successCallback = function (response) {
                deferred.resolve(response);
                
            }
            let errorCallback = function (response) {
                deferred.reject(response);
            }

            self.baseRepository.post(self.subUrl + "/Register", self.user).then(successCallback, errorCallback);
            return deferred.promise;
        }

        signin(username: string, password: string): angular.IPromise<any> {
            var self = this;
            var deferred = self.q.defer();

            let successCallback = function (response) {
                deferred.resolve(response);

            }
            let errorCallback = function (response) {
                deferred.reject(response);
            }

            self.baseRepository.post(self.subUrl + "/SignIn?userName=" + username + "&password=" + password, null).then(successCallback, errorCallback);
            return deferred.promise;
        }

        reset(): void {
            var self = this;
            self.user = new User();
        }
    }

    angular.module('app').service('AccountService', AccountService);
}