module App {
    export class StudentService extends BaseService<Student> {
         
        static $inject = ["UrlService", "BaseRepository", "$q"];
        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.student);
        }
    }

    angular.module('app').service("StudentService", StudentService);
}