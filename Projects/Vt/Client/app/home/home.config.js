angular.module('selise.cms.home', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', { templateUrl: 'app/home/home.tpl.html', controller: 'homeController' });
}]);

