module App {

    class HomeController {
        constructor() {
            console.log('i am in home');
            this.message = new Date().toDateString();
        }

        message: string;
    }

    angular.module('app').controller('HomeController', (HomeController) as any);
}