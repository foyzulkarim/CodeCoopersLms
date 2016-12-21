module Vta {
    "use strict";

    export class CourseController {
        private courseService: CourseService;
        Courses: CourseViewModel[];
        
        static $inject = ["courseService"];

        constructor(courseService: CourseService) {
            this.Courses = [];
            
            this.courseService = courseService;
            this.init();
        }

       

        init(): void {
            var self = this;
            var request = new CourseListRequest();
            request.keyword = "";
            self.courseService.getAll(request).then((response: CourseListResponse): CourseListResponse => {
                self.Courses = response.Courses;
                console.log(self.Courses);
                return response;
            });
            console.log("i am in course controller init method");
        }


    }

    angular.module("vta").controller("CourseController", CourseController);
}