module Vta {
    "use strict";

    export class CourseController {
        private courseService: CourseService;
        courses: CourseViewModel[];
        numbers : number[];
        static $inject = ["courseService"];

        constructor(courseService: CourseService) {
            this.courses = [];
            this.numbers = [1, 2];
            this.courseService = courseService;
            this.init();
        }

       

        init(): void {
            var self = this;
            var request = new CourseListRequest();
            request.keyword = "";
            self.courseService.getAll(request).then((response: CourseListResponse): void => {
                self.courses = response.Courses;
                console.log(self.courses);
            });
            console.log("i am in course controller init method");
        }


    }

    angular.module("vta").controller("CourseController", CourseController);
}