module App {
    export class UserRoleController extends BaseController<UserRole> {
        roleSelectViewList: SelectViewModel[];
        userSelectViewList: SelectViewModel[];
        urlService: UrlService;

        static $inject = ["UserRoleService", "UrlService"];
        constructor(service: UserRoleService, urlService: UrlService) {
            super(service);
            this.urlService = urlService;
            this.reset();
            this.loadRoleList();
            this.loadUserList();
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

        loadUserList(): void {
            var self = this;
            var getResourceUrl = AppConstants.BaseApiUrl + self.urlService.user + "Query/GetSelectList";

            let successCallback = (response: any): void => {
                self.userSelectViewList = response.data;
                console.log(response);
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };

            self.service.getSelectList(getResourceUrl).then(successCallback, errorCallback);
        }

        addUserRole(): void {
            var self = this;

            let successCallback = (response: any): void => {
                alert('User assigned to the role successfully');
                self.reset();
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };

            //self.model.roleId = self.selectedRole.id;
            //self.model.resourceId = self.selectedResource.id;
            self.service.save(self.model).then(successCallback, errorCallback);
        }

        reset() {
            var self = this;
            self.model = new UserRole();
        }
    }

    angular.module('app').controller('UserRoleController', UserRoleController);
}