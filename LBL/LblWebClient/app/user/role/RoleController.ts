module App {
    export class RoleController extends BaseController<Role> {

        static $inject = ["RoleService"];

        constructor(service: RoleService) {
            super(service);
            this.reset();
        }

        addRole(): void {
            var self = this;

            let successCallback = (response: any): void => {
                alert('Role added successfully');
                self.reset();
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };

            self.service.save(self.model).then(successCallback, errorCallback);
        }

        reset() {
            var self = this;
            self.model = new Role();
        }
    }

    angular.module('app').controller("RoleController", RoleController);
}