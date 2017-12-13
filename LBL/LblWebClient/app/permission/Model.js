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
    var SelectViewModel = (function () {
        function SelectViewModel() {
        }
        return SelectViewModel;
    }());
    App.SelectViewModel = SelectViewModel;
    var Permission = (function (_super) {
        __extends(Permission, _super);
        function Permission() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Permission;
    }(App.Entity));
    App.Permission = Permission;
})(App || (App = {}));
//# sourceMappingURL=Model.js.map