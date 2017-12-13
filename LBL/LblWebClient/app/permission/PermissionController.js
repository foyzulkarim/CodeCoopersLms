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
    var PermissionController = (function (_super) {
        __extends(PermissionController, _super);
        function PermissionController(service, urlService) {
            var _this = _super.call(this, service) || this;
            _this.urlService = urlService;
            _this.reset();
            _this.loadRoleList();
            _this.loadResourceList();
            return _this;
        }
        PermissionController.prototype.loadRoleList = function () {
            var self = this;
            var getRoleUrl = App.AppConstants.BaseApiUrl + self.urlService.role + "Query/GetSelectList";
            var successCallback = function (response) {
                self.roleSelectViewList = response.data;
                console.log(response);
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.service.getSelectList(getRoleUrl).then(successCallback, errorCallback);
        };
        PermissionController.prototype.loadResourceList = function () {
            var self = this;
            var getResourceUrl = App.AppConstants.BaseApiUrl + self.urlService.resource + "Query/GetSelectList";
            var successCallback = function (response) {
                self.resourceSelectViewList = response.data;
                console.log(response);
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.service.getSelectList(getResourceUrl).then(successCallback, errorCallback);
        };
        PermissionController.prototype.addPermission = function () {
            var self = this;
            var successCallback = function (response) {
                alert('Permission added successfully');
                self.reset();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.model.roleId = self.selectedRole.id;
            self.model.resourceId = self.selectedResource.id;
            self.service.save(self.model).then(successCallback, errorCallback);
        };
        PermissionController.prototype.reset = function () {
            var self = this;
            self.model = new App.Permission();
        };
        return PermissionController;
    }(App.BaseController));
    PermissionController.$inject = ["PermissionService", "UrlService"];
    App.PermissionController = PermissionController;
    angular.module('app').controller('PermissionController', PermissionController);
})(App || (App = {}));
//# sourceMappingURL=PermissionController.js.map