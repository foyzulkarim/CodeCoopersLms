var App;
(function (App) {
    var HomeController = (function () {
        function HomeController(service) {
            var self = this;
            self.courseService = service;
            self.searchText = "";
            self.searchCourses();
        }
        HomeController.prototype.searchCourses = function () {
            var self = this;
            var successCallback = function (response) {
                self.courses = response.data;
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            var requestModel = new App.BaseRequestModel();
            requestModel.page = 1;
            requestModel.orderBy = "Title";
            requestModel.isAscending = true;
            requestModel.keyword = self.searchText;
            self.courseService.search(requestModel).then(successCallback, errorCallback);
        };
        return HomeController;
    }());
    HomeController.$inject = ["CourseService"];
    angular.module("app").controller("HomeController", HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeControllers.js.map