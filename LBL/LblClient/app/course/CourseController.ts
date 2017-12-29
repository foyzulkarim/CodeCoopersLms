module App {
    export class CoursesController implements angular.IController {
        $onInit(): void { }

        message:string;
        constructor() {
            console.log('hi. i am in CourseController');
            this.message = "hi.hi.hi.";
        }
    }
     
    angular.module('app').controller('CoursesController', CoursesController);
}