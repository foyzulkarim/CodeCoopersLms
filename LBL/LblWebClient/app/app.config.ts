
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

                // student 
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

                .state("root.teacher-entry",
                {
                    url: "/teacher-entry",
                    templateUrl: "partials/teacher/teacher-entry.tpl.html",
                    controller: "TeacherController",
                    controllerAs: "vm"
                })
                .state("root.teacher-list",
                {
                    url: "/teacher-list",
                    templateUrl: "partials/teacher/teacher-list.tpl.html",
                    controller: "TeachersController",
                    controllerAs: "vm"
                })

                // course
                .state("root.course-entry",
                {
                    url: "/course-entry",
                    templateUrl: "partials/course/course-entry.tpl.html",
                    controller: "CourseController",
                    controllerAs: "vm"
                })
                .state("root.course-detail",
                {
                    url: "/course-detail/:id",
                    templateUrl: "partials/course/course-detail.tpl.html",
                    controller: "CourseContentsController",
                    controllerAs: "vm"
                })
                .state("root.content-entry",
                {
                    url: "/content-entry",
                    templateUrl: "partials/content/content-entry.tpl.html",
                    controller: "ContentController",
                    controllerAs: "vm"
                })
                .state("root.enrollment-entry",
                {
                    url: "/enrollment-entry",
                    templateUrl: "partials/enrollment/enrollment-entry.tpl.html",
                    controller: "EnrollmentController",
                    controllerAs: "vm"
                })

                // acount
                .state("root.signup",
                {
                    url: "/signup",
                    templateUrl: "partials/account/signUp.tpl.html",
                    controller: "NavController",
                    controllerAs: "vm1"
                })
                .state("root.signin",
                {
                    url: "/signin",
                    templateUrl: "partials/account/signin.tpl.html",
                    controller: "NavController",
                    controllerAs: "vm2"
                })

                // Role
                .state("root.role-entry",
                {
                    url: "/role-entry",
                    templateUrl: "partials/role/role-entry.tpl.html",
                    controller: "RoleController",
                    controllerAs: "vm"
                })

                // User
                .state("root.user-role-entry",
                {
                    url: "/user-role-entry",
                    templateUrl: "partials/user/user-role-entry.tpl.html",
                    controller: "UserRoleController",
                    controllerAs: "vm"
                })

                // Resource
                .state("root.resource-entry",
                {
                    url: "/resource-entry",
                    templateUrl: "partials/resource/resource-entry.tpl.html",
                    controller: "ResourceController",
                    controllerAs: "vm"
                })

                // Permission
                .state("root.permission-entry",
                {
                    url: "/permission-entry",
                    templateUrl: "partials/permission/permission-entry.tpl.html",
                    controller: "PermissionController",
                    controllerAs: "vm"
                });
        }
    }

    angular.module('app', ["ui.router"]);

    // register class - which and how
    angular.module('app').config(Configuration);

   
}