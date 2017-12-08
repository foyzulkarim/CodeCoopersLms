module App {
    export class AuthData {
        token: string;
        tokenType: string;
        userName: string;
        landingRoute:string;
    }
    export class AccountService {
        baseRepository: BaseRepository;
        q: angular.IQService;
        commandUrl: string;
        subUrl: string;

        static $inject = ["BaseRepository", "$q"];
        constructor(baseRepository: BaseRepository, q: angular.IQService) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.subUrl = new UrlService().account;            
        }

        register(user: User): angular.IPromise<any> {
            var self = this;
            var deferred = self.q.defer();

            let successCallback = function (response) {
                deferred.resolve(response);
                
            }
            let errorCallback = function (response) {
                deferred.reject(response);
            }
            var url = AppConstants.BaseApiUrl + self.subUrl + "/Register";
            self.baseRepository.post(url, user).then(successCallback, errorCallback);
            return deferred.promise;
        }

        signin(username: string, password: string): angular.IPromise<any> {
            var self = this;
            var deferred = self.q.defer();

            let successCallback = function (response) {
                if (response.status == AppConstants.StatusOk) {
                    //console.log(response);
                    deferred.resolve(response);
                }
            }
            let errorCallback = function (response) {
                deferred.reject(response);
            }

            var data = "username=" + username + "&password=" + password + "&grant_type=password";
            self.baseRepository.postUrlencodedForm(AppConstants.UserAuthenticationUrl, data).then(successCallback, errorCallback);
            return deferred.promise;
        }        
    }

    angular.module('app').service('AccountService', AccountService);
}