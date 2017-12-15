module App {
    export class UserRoleService extends BaseService<UserRole> {
        static $inject = ["UrlService", "BaseRepository", "$q"];
        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.userRole);
        }
    }

    angular.module('app').service("UserRoleService", UserRoleService);
}