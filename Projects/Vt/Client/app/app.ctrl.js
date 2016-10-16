angular.module('vt').controller("appController", ["$rootScope", "$scope", "$location", "authenticationSvc", function ($rootScope, $scope,$location, authenticationSvc) {

    function loadUser() {
        $scope.isSignedIn = authenticationSvc.isSignedIn();
        if ($scope.isSignedIn) {
            if (!$rootScope.user) {
                $rootScope.user = authenticationSvc.getUserInfo();

            }
            $scope.user = $rootScope.user;
        }
    }

    loadUser();

    $scope.signout = function() {
        authenticationSvc.signout();
        $rootScope.$broadcast("signoutSuccess");
    };

    $rootScope.$on("signoutSuccess", function (event) {
        $scope.user = null;
        loadUser();
    });

    $rootScope.$on("signinSuccess", function(event) {
        loadUser();
    });

    $scope.traineeAccount = function() {
        if ($scope.user) {
            $location.path('/trainee/' + $scope.user.Id);
        }
    };

}]);