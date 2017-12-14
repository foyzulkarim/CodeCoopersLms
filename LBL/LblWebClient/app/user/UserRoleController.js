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
    var UserRoleController = (function (_super) {
        __extends(UserRoleController, _super);
        function UserRoleController(service, urlService) {
            var _this = _super.call(this, service) || this;
            _this.urlService = urlService;
            _this.reset();
            _this.loadRoleList();
            _this.loadUserList();
            return _this;
        }
        UserRoleController.prototype.loadRoleList = function () {
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
        UserRoleController.prototype.loadUserList = function () {
            var self = this;
            var getResourceUrl = App.AppConstants.BaseApiUrl + self.urlService.user + "Query/GetSelectList";
            var successCallback = function (response) {
                self.userSelectViewList = response.data;
                console.log(response);
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.service.getSelectList(getResourceUrl).then(successCallback, errorCallback);
        };
        UserRoleController.prototype.addUserRole = function () {
            var self = this;
            var successCallback = function (response) {
                alert('User assigned to the role successfully');
                self.reset();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            //self.model.roleId = self.selectedRole.id;
            //self.model.resourceId = self.selectedResource.id;
            self.service.save(self.model).then(successCallback, errorCallback);
        };
        UserRoleController.prototype.reset = function () {
            var self = this;
            self.model = new App.UserRole();
        };
        return UserRoleController;
    }(App.BaseController));
    UserRoleController.$inject = ["UserRoleService", "UrlService"];
    App.UserRoleController = UserRoleController;
    angular.module('app').controller('UserRoleController', UserRoleController);
})(App || (App = {}));
//# sourceMappingURL=UserRoleController.js.map