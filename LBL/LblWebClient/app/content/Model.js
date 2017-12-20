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
    var Category = /** @class */ (function () {
        function Category(id, categoryType) {
            this.id = id;
            this.catetoryType = categoryType;
        }
        return Category;
    }());
    App.Category = Category;
    var Content = /** @class */ (function (_super) {
        __extends(Content, _super);
        function Content() {
            return _super.call(this) || this;
        }
        return Content;
    }(App.Entity));
    App.Content = Content;
})(App || (App = {}));
//# sourceMappingURL=Model.js.map