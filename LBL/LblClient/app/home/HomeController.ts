module App {

    class HomeController {
        constructor() {
            console.log('i am in home');
        }
    }

    angular.module('app').controller('HomeController', (HomeController) as any);
}