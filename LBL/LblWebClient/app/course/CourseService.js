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
    var CourseService = (function (_super) {
        __extends(CourseService, _super);
        function CourseService(url, baseRepository, q) {
            return _super.call(this, baseRepository, q, url.student) || this;
        }
        return CourseService;
    }(App.BaseService));
    CourseService.$inject = ["UrlService", "BaseRepository", "$q"];
    App.CourseService = CourseService;
    angular.module('app').service("CourseService", CourseService);
})(App || (App = {}));
//# sourceMappingURL=CourseService.js.map