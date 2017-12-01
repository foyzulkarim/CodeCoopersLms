module App {
    export class RegisterService extends BaseService<Register> {

        static $inject = ["UrlService", "BaseRepository", "$q"];
        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.register);
        }
    }

    angular.module('app').service("RegisterService", RegisterService);
}