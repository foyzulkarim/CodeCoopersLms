module App {
    class LoginController extends BaseController<Login> {

        static $inject = ["LoginService"];
        constructor(service: LoginService) {
            super(service);
            this.reset();
        }

        login(): void {

            var self = this;

            let successCallback = (response: any): void => {
                alert('Login successfully');
                self.reset();
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };
            
            var data = "username=" + self.model.username + "&password=" + self.model.password + "&grant_type=password";
            self.service.login(data).then(successCallback, errorCallback);
        }

        reset(): void {
            this.model = new Login();
        }
    }

    angular.module('app').controller("LoginController", LoginController);

}