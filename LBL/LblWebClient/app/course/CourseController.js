var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var CourseController = (function (_super) {
        __extends(CourseController, _super);
        function CourseController(service) {
            var _this = _super.call(this, service) || this;
            _this.levelOfAudiences = [];
            _this.orderStates = [];
            console.log("I am in Course Controller");
            for (var enumMem in App.LevelOfAudience) {
                if (App.LevelOfAudience.hasOwnProperty(enumMem)) {
                    var isValueProperty = parseInt(enumMem, 10) >= 0;
                    if (isValueProperty) {
                        var value = App.LevelOfAudience[enumMem];
                        _this.levelOfAudiences.push(value);
                    }
                }
            }
            _this.model.publishDate = new Date();
            //this.searchRequest["LevelOfAudience"] = this.levelOfAudiences[0]; 
            _this.save();
            _this.model = new App.Course();
            return _this;
        }
        CourseController.prototype.reset = function () {
            this.model = new App.Course();
        };
        return CourseController;
    }(App.BaseController));
    CourseController.$inject = ["CourseService"];
    App.CourseController = CourseController;
    angular.module('app').controller("CourseController", CourseController);
})(App || (App = {}));
//# sourceMappingURL=CourseController.js.map