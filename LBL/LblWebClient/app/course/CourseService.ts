module App {
    export class CourseService extends BaseService<Course> {

        static $inject = ["UrlService", "BaseRepository", "$q"];
        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.student);
        }
    }

    angular.module('app').service("CourseService", CourseService);
}