module App {
    export class UrlService {

        student: string;
        teacher: string;
        course: string;
        content: string;
        enrollment: string;
        register: string;
        login : string;

        constructor() {
            this.student = "Student";
            this.teacher = "Teacher";
            this.course = "Course";
            this.content = "Content";
            this.enrollment = "Enrollment";
            this.register = "Account/Register";
            this.login = "Token";


        }
    }

    angular.module('app').service('UrlService', UrlService);
}