angular.module('vt.course',['ngRoute','ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/class-detail/:id', {
                templateUrl: 'app/course/class/class.tpl.html',
                controller: 'classController'             
            })
            .when('/course-detail', {
                templateUrl: 'app/course/course-detail/course-detail.tpl.html',
                controller: 'courseDetailController'                
            });
}]);