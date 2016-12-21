module Vta {
    "use strict";

    export class CourseCreateController {
        private courseService: CourseService;
        courses: CourseViewModel[];        
        static $inject = ["courseService"];

        constructor(courseService: CourseService) {
            this.courses = [];
            this.courseService = courseService;
            this.init();
        }


        init(): void {
            var self = this;
           
            console.log("i am in course Create controller init method");
        }


    }

    angular.module("vta").controller("CourseCreateController", CourseCreateController);
}