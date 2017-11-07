var Vta;
(function (Vta) {
    "use strict";
    var CourseCreateController = (function () {
        function CourseCreateController(courseService) {
            this.courses = [];
            this.courseService = courseService;
            this.init();
        }
        CourseCreateController.prototype.init = function () {
            var self = this;
            console.log("i am in course Create controller init method");
        };
        return CourseCreateController;
    }());
    CourseCreateController.$inject = ["courseService"];
    Vta.CourseCreateController = CourseCreateController;
    angular.module("vta").controller("CourseCreateController", CourseCreateController);
})(Vta || (Vta = {}));
//# sourceMappingURL=course-create.controller.js.map