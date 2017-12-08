module App {
    export class ResourceService extends BaseService<Resource> {
        static $inject = ["UrlService", "BaseRepository", "$q"];
        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.resource);
        }
    }

    angular.module('app').service("ResourceService", ResourceService);
}