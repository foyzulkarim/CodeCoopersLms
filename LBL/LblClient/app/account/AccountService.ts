module App {
    export class UserInfo {
        token: string;
        userName: string;
        landingRoute: string;
        resources: string[];
        requestId: string;
    }

    export class RegisterRequest {
        email: string;
        password: string;
        confirmPassword: string;
    }

    export class AccountService {
        baseRepository: WebService;
        q: angular.IQService;
        commandUrl: string;
        subUrl: string;
        storageService: LocalStorageService;


        static $inject = ["WebService", "$q", "LocalStorageService"];
        constructor(baseRepository: WebService, q: angular.IQService, storageService: LocalStorageService) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.storageService = storageService;
            // this.subUrl = new UrlService().account;            
        }

        register(user: RegisterRequest): angular.IPromise<any> {
            var self = this;
            var deferred = self.q.defer();

            let successCallback = function (response) {
                deferred.resolve(response);

            }
            let errorCallback = function (response) {
                deferred.reject(response);
            }
            var url = AppConstants.BaseApiUrl + AppConstants.Account + "Register";
            self.baseRepository.post(url, user).then(successCallback, errorCallback);
            return deferred.promise;
        }

        signin(username: string, password: string): angular.IPromise<any> {
            var self = this;
            var deferred = self.q.defer();

            let successCallback = function (response) {
                console.log('AccountService successCallback');
                let info: UserInfo = new UserInfo();
                info.landingRoute = response.data.landingRoute;
                info.userName = response.data.userName;
                info.resources = response.data.resources;
                self.storageService.save(LocalStorageKeys.UserInfo, info);
                
                deferred.resolve(response.data);
            }

            let errorCallback = function (response) {
                deferred.reject(response);
            }

            var data = `username=${username}&password=${password}&grant_type=password`;
            console.log('AccountService signin');
            self.baseRepository.postUrlencodedForm("http://localhost:30285/token", data).then(successCallback, errorCallback);
            return deferred.promise;
        }
    }

    angular.module('app').service('AccountService', AccountService);
}