angular.module('vt.account',['ngRoute','ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/signup', { templateUrl: 'app/account/signup/signup.tpl.html', controller: 'signupController' })
            .when('/trainee/:id', { templateUrl: 'app/account/trainee/trainee.tpl.html', controller: 'traineeController' })
            .when('/signin', { templateUrl: 'app/account/signin/signin.tpl.html', controller: 'signinController' });
    }]);

