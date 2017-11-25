module App {
    export class EnrollmentService extends BaseService<Enrollment> {

        static $inject = ["UrlService", "BaseRepository", "$q"];
        constructor(url: UrlService, baseRepository: BaseRepository, q: angular.IQService) {
            super(baseRepository, q, url.enrollment);
        }
    }

    angular.module('app').service("EnrollmentService", EnrollmentService);
}