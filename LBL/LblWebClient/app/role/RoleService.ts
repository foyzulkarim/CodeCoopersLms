module App {
    export class RoleService extends BaseService<Role> {
        static $inject = ["UrlService", "BaseRepository", "$q"];
        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.role);            
        }
    }

    angular.module('app').service("RoleService", RoleService);
}