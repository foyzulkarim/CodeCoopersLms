module App {
    export class ContentService extends BaseService<Content> {

        static $inject = ["UrlService", "BaseRepository", "$q"];

        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.content);
        }
    }

    angular.module('app').service('ContentService', ContentService);
}