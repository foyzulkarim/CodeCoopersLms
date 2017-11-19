var App;
(function (App) {
    var HomeController = (function () {
        function HomeController(service) {
            var self = this;
            self.courseService = service;
            self.requestModel = new App.BaseRequestModel();
            self.requestModel.page = 1;
            self.requestModel.orderBy = "Title";
            self.requestModel.isAscending = true;
            self.requestModel.perPageCount = 3;
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
            self.requestModel.keyword = self.searchText;
            self.courseService.search(self.requestModel).then(successCallback, errorCallback);
        };
        HomeController.prototype.next = function () {
            var self = this;
            self.requestModel.page = self.requestModel.page + 1;
            self.searchCourses();
        };
        HomeController.prototype.previous = function () {
            var self = this;
            if (self.requestModel.page > 1) {
                self.requestModel.page = self.requestModel.page - 1;
                self.searchCourses();
            }
        };
        return HomeController;
    }());
    HomeController.$inject = ["CourseService"];
    angular.module("app").controller("HomeController", HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeControllers.js.map