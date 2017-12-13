module App {
    export class PermissionService extends BaseService<Permission> {
        static $inject = ["UrlService", "BaseRepository", "$q"];
        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.permission);
        }
    }

    angular.module('app').service("PermissionService", PermissionService);
}