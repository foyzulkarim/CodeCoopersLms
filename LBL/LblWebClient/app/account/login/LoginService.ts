module App {
    export class LoginService extends BaseService<Login> {

        static $inject = ["UrlService", "BaseRepository", "$q"];
        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.login);
        }
    }

    angular.module('app').service("LoginService", LoginService);
}