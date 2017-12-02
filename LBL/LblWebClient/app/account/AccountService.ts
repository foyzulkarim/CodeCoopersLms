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
        authData: AuthData;

        static $inject = ["BaseRepository", "$q"];
        constructor(baseRepository: BaseRepository, q: angular.IQService) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.subUrl = new UrlService().account;
            this.authData = new AuthData();
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

            self.baseRepository.post(self.subUrl + "/Register", user).then(successCallback, errorCallback);
            return deferred.promise;
        }

        signin(username: string, password: string): angular.IPromise<any> {
            var self = this;
            var deferred = self.q.defer();

            let successCallback = function (response) {
                if (response.status == AppConstants.StatusOk) {
                    self.authData.token = response.data.access_token;
                    self.authData.tokenType = response.data.token_type;
                    self.authData.userName = response.data.userName;
                    self.authData.landingRoute = response.data.landingRoute;
                    console.log(response);
                    //sessionStorage.AuthData = self.authData;
                }

                deferred.resolve(response);
            }
            let errorCallback = function (response) {
                deferred.reject(response);
            }

            var data = "username=" + username + "&password=" + password + "&grant_type=password";
            self.baseRepository.postUrlencodedForm(data).then(successCallback, errorCallback);
            return deferred.promise;
        }        
    }

    angular.module('app').service('AccountService', AccountService);
}