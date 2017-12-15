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
    var PermissionService = (function (_super) {
        __extends(PermissionService, _super);
        function PermissionService(url, baseRepository, q) {
            return _super.call(this, baseRepository, q, url.permission) || this;
        }
        return PermissionService;
    }(App.BaseService));
    PermissionService.$inject = ["UrlService", "BaseRepository", "$q"];
    App.PermissionService = PermissionService;
    angular.module('app').service("PermissionService", PermissionService);
})(App || (App = {}));
//# sourceMappingURL=PermissionService.js.map