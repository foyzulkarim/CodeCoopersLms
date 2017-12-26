module App {
    export class CoursesController {
        message:string;
        constructor() {
            console.log('hi. i am in CourseController');
            this.message = "hi.hi.hi.";
        }
    }

    angular.module('app').controller('CoursesController', CoursesController as any);
}