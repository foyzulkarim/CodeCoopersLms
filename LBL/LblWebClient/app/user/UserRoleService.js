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
    var UserRoleService = (function (_super) {
        __extends(UserRoleService, _super);
        function UserRoleService(url, baseRepository, q) {
            return _super.call(this, baseRepository, q, url.userRole) || this;
        }
        return UserRoleService;
    }(App.BaseService));
    UserRoleService.$inject = ["UrlService", "BaseRepository", "$q"];
    App.UserRoleService = UserRoleService;
    angular.module('app').service("UserRoleService", UserRoleService);
})(App || (App = {}));
//# sourceMappingURL=UserRoleService.js.map