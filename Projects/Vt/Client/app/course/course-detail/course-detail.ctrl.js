angular.module('vt.course').controller('courseDetailController', ['$rootScope', '$scope', '$location', 'courseDetailService', function courseDetailController($rootScope, $scope, $location, courseDetailService) {
    $scope.levels = [];
    function init() {
        courseDetailService.get().then(function(response) {
            console.log(response);
            $scope.levels = response.Data;
        });
    }

    init();


    $scope.gotoDetails = function (content, level) {
        $rootScope.level = level;
        $location.path("/class-detail/"+content.Id);
    };


}]);