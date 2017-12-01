module App {
    export class UrlService {

        student: string;
        teacher: string;
        course: string;
        content: string;
        enrollment: string;
        account: string;

        constructor() {
            this.student = "Student";
            this.teacher = "Teacher";
            this.course = "Course";
            this.content = "Content";
            this.enrollment = "Enrollment";
            this.account = "Account";
        }
    }

    angular.module('app').service('UrlService', UrlService);
}