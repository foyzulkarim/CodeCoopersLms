module App {
    export class PermissionController extends BaseController<Permission> {
        roleSelectViewList: SelectViewModel[];
        resourceSelectViewList: SelectViewModel[];
        selectedRole: SelectViewModel;
        selectedResource: SelectViewModel;
        urlService: UrlService;

        static $inject = ["PermissionService", "UrlService"];
        constructor(service: PermissionService, urlService: UrlService) {
            super(service);
            this.urlService = urlService;
            this.reset();
            this.loadRoleList();
            this.loadResourceList();
        }

        loadRoleList(): void {
            var self = this;
            var getRoleUrl = AppConstants.BaseApiUrl + self.urlService.role + "Query/GetSelectList";

            let successCallback = (response: any): void => {
                self.roleSelectViewList = response.data;
                console.log(response);
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };

            self.service.getSelectList(getRoleUrl).then(successCallback, errorCallback);
        }

        loadResourceList(): void {
            var self = this;
            var getResourceUrl = AppConstants.BaseApiUrl + self.urlService.resource + "Query/GetSelectList";

            let successCallback = (response: any): void => {
                self.resourceSelectViewList = response.data;
                console.log(response);
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };

            self.service.getSelectList(getResourceUrl).then(successCallback, errorCallback);
        }

        addPermission(): void {
            var self = this;

            let successCallback = (response: any): void => {
                alert('Permission added successfully');
                self.reset();
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };

            self.model.roleId = self.selectedRole.id;
            self.model.resourceId = self.selectedResource.id;
            self.service.save(self.model).then(successCallback, errorCallback);
        }

        reset() {
            var self = this;
            self.model = new Permission();
        }
    }

    angular.module('app').controller('PermissionController', PermissionController);
}