angular.module('vt.account').controller('traineeController', ['$rootScope', '$scope', '$location', '$routeParams', 'authenticationSvc', 'traineeService', function ($rootScope, $scope, $location, $routeParams, authenticationSvc, traineeService) {


    function init() {
        $scope.trainee = {
            Name: '',
            Email: '',
            Phone: '',
            Password: ''
        };
        $scope.payment = {};
        traineeService.get($routeParams.id).then(function(response) {
            $scope.trainee = response.Data;
        }, function(error) {
            alert(error.Message);
            $location.path('/#/course-detail');
        });


    }

    if ($routeParams.id) {
        init();
    } else {
        $location.path('/#/course-detail');
    }


    $scope.pay = function () {
        $scope.payment.TraineeId = $scope.trainee.Id;

        traineeService.pay($scope.payment).then(function (response) {
            init();
        }, function(error) {
            alert(error.Message);
        });
    };


}]);