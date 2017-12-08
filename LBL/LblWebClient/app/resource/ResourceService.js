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
    var ResourceService = (function (_super) {
        __extends(ResourceService, _super);
        function ResourceService(url, baseRepository, q) {
            return _super.call(this, baseRepository, q, url.resource) || this;
        }
        return ResourceService;
    }(App.BaseService));
    ResourceService.$inject = ["UrlService", "BaseRepository", "$q"];
    App.ResourceService = ResourceService;
    angular.module('app').service("ResourceService", ResourceService);
})(App || (App = {}));
//# sourceMappingURL=ResourceService.js.map