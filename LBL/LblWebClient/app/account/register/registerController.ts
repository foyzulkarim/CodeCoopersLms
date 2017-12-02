module App {
    class RegisterController extends BaseController<Register> {

        static $inject = ["RegisterService"];
        constructor(service: RegisterService) {
            super(service);
            this.reset();
        }

        reset(): void {
            this.model = new Register();
        }
    }

    angular.module('app').controller("RegisterController", RegisterController);

}