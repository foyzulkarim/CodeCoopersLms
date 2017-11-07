module App {
    class HomeController {

        values: string[];

        static $inject = [];
        constructor() {
            let self = this;
            console.log("I am in home controller");
            this.now = new Date().toString();            
        }

        now: string;
    }

    angular.module("app").controller("HomeController", HomeController);
}