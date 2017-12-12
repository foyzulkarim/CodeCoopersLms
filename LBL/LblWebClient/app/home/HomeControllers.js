var App;
(function (App) {
    var HomeController = (function () {
        function HomeController(service, scope) {
            var self = this;
            self.courseService = service;
            this.$scope = scope;
            self.requestModel = new App.BaseRequestModel();
            self.requestModel.page = 1;
            self.requestModel.orderBy = "Title";
            self.requestModel.isAscending = true;
            self.requestModel.perPageCount = 3;
            self.requestModel.keyword = "";
            self.searchCourses();
            self.$scope.$on("signedOut", this.signedOutSuccessfully2);
        }
        HomeController.prototype.signedOutSuccessfully2 = function (p, q) {
            console.log('HomeController signedOut: ');
            console.log(p, q);
        };
        HomeController.prototype.searchCourses = function () {
            var self = this;
            var successCallback = function (response) {
                self.courses = response.data;
            };
            var errorCallback = function (response) {
                console.error(response);
            };
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
    HomeController.$inject = ["CourseService", "$scope"];
    angular.module("app").controller("HomeController", HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeControllers.js.map