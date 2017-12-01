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
    var RegisterService = (function (_super) {
        __extends(RegisterService, _super);
        function RegisterService(url, baseRepository, q) {
            return _super.call(this, baseRepository, q, url.register) || this;
        }
        return RegisterService;
    }(App.BaseService));
    RegisterService.$inject = ["UrlService", "BaseRepository", "$q"];
    App.RegisterService = RegisterService;
    angular.module('app').service("RegisterService", RegisterService);
})(App || (App = {}));
//# sourceMappingURL=RegisterService.js.map