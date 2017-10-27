module App {
    export class TeacherService extends BaseService<Teacher> {

        static $inject = ["UrlService", "BaseRepository", "$q"];
        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.teacher);
        }
    }

    angular.module('app').service("TeacherService", TeacherService);
}