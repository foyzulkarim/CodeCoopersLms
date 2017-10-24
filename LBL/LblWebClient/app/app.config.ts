
module App {

    class Configuration {

        static $inject = ["$stateProvider", "$urlRouterProvider"];
        constructor(stateProvider: angular.ui.IStateProvider, urlRouteProvider: angular.ui.IUrlRouterProvider) {
            urlRouteProvider.otherwise("/");
            stateProvider
                .state("root",
                {
                    abstract: true,
                    url: "",
                    template: "<div ui-view class=\"container-fluid slide\"></div>"
                })

                .state("root.home",
                {
                    url: "/",
                    templateUrl: "partials/home/home.tpl.html",
                    controller: "HomeController",
                    controllerAs: "vm"
                })
                .state("root.student-entry",
                {
                    url: "/student-entry",
                    templateUrl: "partials/student/student-entry.tpl.html",
                    controller: "StudentController",
                    controllerAs: "vm"
                })
                .state("root.student-list",
                {
                    url: "/student-list",
                    templateUrl: "partials/student/student-list.tpl.html",
                    controller: "StudentsController",
                    controllerAs: "vm"
                })

                ;
        }
    }

    angular.module('app', ["ui.router"]);

    // register class - which and how
    angular.module('app').config(Configuration);


}