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
    var EnrollmentService = /** @class */ (function (_super) {
        __extends(EnrollmentService, _super);
        function EnrollmentService(url, baseRepository, q) {
            return _super.call(this, baseRepository, q, url.enrollment) || this;
        }
        EnrollmentService.$inject = ["UrlService", "BaseRepository", "$q"];
        return EnrollmentService;
    }(App.BaseService));
    App.EnrollmentService = EnrollmentService;
    angular.module('app').service("EnrollmentService", EnrollmentService);
})(App || (App = {}));
//# sourceMappingURL=EnrollmentService.js.map