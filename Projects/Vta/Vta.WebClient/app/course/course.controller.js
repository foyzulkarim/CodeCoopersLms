var Vta;
(function (Vta) {
    "use strict";
    var CourseController = (function () {
        function CourseController(courseService) {
            this.courses = [];
            this.numbers = [1, 2];
            this.courseService = courseService;
            this.init();
        }
        CourseController.prototype.init = function () {
            var self = this;
            var request = new Vta.CourseListRequest();
            request.keyword = "";
            self.courseService.getAll(request).then(function (response) {
                self.courses = response.Courses;
                console.log(self.courses);
            });
            console.log("i am in course controller init method");
        };
        CourseController.$inject = ["courseService"];
        return CourseController;
    }());
    Vta.CourseController = CourseController;
    angular.module("vta").controller("CourseController", CourseController);
})(Vta || (Vta = {}));
//# sourceMappingURL=course.controller.js.map