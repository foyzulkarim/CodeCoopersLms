module Vta {
    "use strict";

    export class AppConfig {

        static $inject = ["$stateProvider", "$urlRouterProvider"];

        constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
            console.log("I am in config constructor.");
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "partials/course/courses.tpl.html",
                    controller: "CourseController",
                    controllerAs: "vm"
                })
                .state("account", {
                    url: "/account",
                    template: "<span> i m logged in now. </span>"
                })
                .state("signin", {
                    url: "/signin",
                    templateUrl: "partials/account/signin.tpl.html",
                    controller: "SigninController",
                    controllerAs: "vm"
                })
                .state("register", {
                    url: "/register",
                    templateUrl: "partials/account/register.tpl.html",
                    controller: "RegisterController",
                    controllerAs: "vm"
                })
                .state("denied", {
                    url: "/denied",
                    template: '<h1>Access Denied <a ui-sref="home"> back to home </a></h1>'
                })
                .state("account.profile", {
                    parent: "account",
                    url: "/profile",
                    template: "<h2>I am in acc profile</h2>"
                })
                .state('course-detail', {
                    url: '/coursedetail/{courseId}',
                    templateUrl: "partials/course/course-detail.tpl.html",
                    controller: "CourseController",
                    controllerAs: "vm"
                });
        }
    }

    angular.module("vta", ["ngResource", "ui.router", "LocalStorageModule"]);
    angular.module("vta").config(AppConfig);
    angular.module("vta").run([
        "authService", authService => {
            authService.fillAuthData();
        }
    ]);

    angular.module("vta").run([
        "$rootScope", "$state", "permissionService", "authService", function($rootScope, $state, permissionService, authService) {
            $rootScope.$on("$stateChangeStart",
                function(event, toState, toParams, fromState, fromParams) {
                    permissionService.isAllowed(toState.name)
                        .then(function(response) {
                            if (response.isAllowed) {
                                return;
                            } else {
                                console.log(response);
                                event.preventDefault();
                                if (authService.isSignedIn()) {
                                    $state.go("denied");
                                } else {
                                    $state.go("signin");
                                }
                            }
                        }, function(error) {
                            console.log(error);
                            if (authService.isSignedIn()) {
                                $state.go("denied");
                            } else {
                                $state.go("signin");
                            }
                        });
                });
        }
    ]);

    angular.module("vta").config(function($httpProvider) {
        $httpProvider.interceptors.push("authInterceptorService");
    });


}