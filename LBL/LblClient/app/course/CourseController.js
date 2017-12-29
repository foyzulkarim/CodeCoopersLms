var App;
(function (App) {
    var CoursesController = /** @class */ (function () {
        function CoursesController() {
            console.log('hi. i am in CourseController');
            this.message = "hi.hi.hi.";
        }
        CoursesController.prototype.$onInit = function () { };
        return CoursesController;
    }());
    App.CoursesController = CoursesController;
    angular.module('app').controller('CoursesController', CoursesController);
})(App || (App = {}));
//# sourceMappingURL=CourseController.js.map