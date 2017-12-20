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
    var Course = /** @class */ (function (_super) {
        __extends(Course, _super);
        function Course() {
            return _super.call(this) || this;
        }
        return Course;
    }(App.Entity));
    App.Course = Course;
    var LevelOfAudience;
    (function (LevelOfAudience) {
        LevelOfAudience[LevelOfAudience["Beginner"] = 0] = "Beginner";
        LevelOfAudience[LevelOfAudience["Intermediate"] = 1] = "Intermediate";
        LevelOfAudience[LevelOfAudience["Advance"] = 2] = "Advance";
    })(LevelOfAudience = App.LevelOfAudience || (App.LevelOfAudience = {}));
})(App || (App = {}));
//# sourceMappingURL=Model.js.map