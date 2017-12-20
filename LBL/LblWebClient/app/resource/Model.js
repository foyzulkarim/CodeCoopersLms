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
    var ResourceType = /** @class */ (function () {
        function ResourceType(id, value) {
            this.id = id;
            this.value = value;
        }
        return ResourceType;
    }());
    App.ResourceType = ResourceType;
    var Resource = /** @class */ (function (_super) {
        __extends(Resource, _super);
        function Resource() {
            return _super.call(this) || this;
        }
        return Resource;
    }(App.Entity));
    App.Resource = Resource;
})(App || (App = {}));
//# sourceMappingURL=Model.js.map