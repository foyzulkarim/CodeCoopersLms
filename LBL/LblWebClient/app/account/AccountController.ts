module App {
    export class ApiResponseStatus {
        static statusOk = 200;
        static statusBad = 400;
    }
    export class AccountController {
        baseRepository: BaseRepository;
        commandUrl: string;
        user: User;
        subUrl: string;

        static $inject = ["BaseRepository"];
        constructor(baseRepository: BaseRepository) {
            this.baseRepository = baseRepository;
            this.subUrl = new UrlService().account;
            this.reset();
        }

        register(): void {
            var self = this;

            let successCallback = function(response) {
                if (response.status == ApiResponseStatus.statusOk) {
                    alert("Sign up successfull");
                } else if (response.status == ApiResponseStatus.statusBad) {
                    alert(response.modelState);
                }
                
            }
            let errorCallback = function (response) {
                alert(response.modelState);
                console.error(response);
            }

            self.baseRepository.post(self.subUrl + "/Register", self.user).then(successCallback, errorCallback);
            
        }

        reset(): void {
            var self = this;
            self.user = new User();
        }
    }

    angular.module('app').controller('AccountController', AccountController);
}