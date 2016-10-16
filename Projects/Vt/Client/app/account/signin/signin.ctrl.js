angular.module('vt.account').controller('signinController', ['$rootScope', '$scope', '$location', 'authenticationSvc', function ($rootScope,$scope, $location, authenticationSvc) {
    function init() {
        $scope.user = {
            Email: '',
            Password: ''
        };
        $scope.signinOk = false;
        $scope.errorMessage = '';
    }

    $scope.signin = function () {
        authenticationSvc.signin($scope.user).then(function (response) {
            if (response.IsSuccess) {
                alert(response.Message);
                init();
                $rootScope.user = authenticationSvc.getUserInfo();
                $rootScope.$broadcast("signinSuccess");
                $location.path('/course-detail');
            } else {
                $scope.errorMessage = response.Message;
            }
        }, function(error) {
            console.log(error);
            alert(error.Message);
        });
    };


    init();
}]);