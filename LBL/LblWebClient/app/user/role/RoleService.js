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
    var RoleService = /** @class */ (function (_super) {
        __extends(RoleService, _super);
        function RoleService(url, baseRepository, q) {
            return _super.call(this, baseRepository, q, url.role) || this;
        }
        RoleService.$inject = ["UrlService", "BaseRepository", "$q"];
        return RoleService;
    }(App.BaseService));
    App.RoleService = RoleService;
    angular.module('app').service("RoleService", RoleService);
})(App || (App = {}));
//# sourceMappingURL=RoleService.js.map