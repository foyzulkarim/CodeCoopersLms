angular.module('vt.account').controller('signupController', ['$rootScope', '$scope', '$location', 'authenticationSvc', 'classService', function signupController($rootScope, $scope, $location, authenticationSvc, classService) {
   

    function init() {
        $scope.user = {
            Name: '',
            Email: '',
            Phone: '',
            Password: ''
        };
        $scope.signupOk = false;
        $scope.errorMessage = '';
    }

    $scope.signup = function () {
       
        authenticationSvc.signup($scope.user).then(function (response) {
            if (response.IsSuccess) {             
                $rootScope.user = authenticationSvc.getUserInfo();
                $rootScope.$broadcast("signinSuccess");
                classService.unlockFirstContent().then(function (response) {
                    init();
                    $location.path('/course-detail');
                });
                alert('Thanks for signing up ' + $scope.user.Name + '. Please check your email for detail instruction. ');
            } else {
                $scope.errorMessage = response.Message;
            }
        });        
    };


    init();

}]);