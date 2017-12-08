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
    var ResourceController = (function (_super) {
        __extends(ResourceController, _super);
        function ResourceController(service) {
            var _this = _super.call(this, service) || this;
            _this.resourceTypeList = [];
            _this.reset();
            _this.loadResourceTypeList();
            return _this;
        }
        ResourceController.prototype.loadResourceTypeList = function () {
            var self = this;
            self.resourceTypeList.push(new App.ResourceType("WebPage", "WebPage"));
            self.resourceTypeList.push(new App.ResourceType("Div", "Div"));
            self.resourceTypeList.push(new App.ResourceType("UI-Control", "UI-Control"));
        };
        ResourceController.prototype.addResource = function () {
            var self = this;
            var successCallback = function (response) {
                alert('Resources added successfully');
                self.reset();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.model.type = self.selectedResource.id;
            self.service.commandUrl = self.service.commandUrl;
            self.service.save(self.model).then(successCallback, errorCallback);
        };
        ResourceController.prototype.reset = function () {
            var self = this;
            self.model = new App.Resource();
        };
        return ResourceController;
    }(App.BaseController));
    ResourceController.$inject = ["ResourceService"];
    App.ResourceController = ResourceController;
    angular.module('app').controller('ResourceController', ResourceController);
})(App || (App = {}));
//# sourceMappingURL=ResourceController.js.map