module Vta {
    "use strict";

    export class CourseDetailController {
        private courseService: CourseService;
        private stateService: angular.ui.IStateService;
        private courseId : string;
        Course: CourseDetailViewModel;
        private  param: angular.ui.IStateParamsService;

        static $inject = ["$stateParams", "$state", "courseService"];

        constructor( param: angular.ui.IStateParamsService, $state: angular.ui.IStateService, courseService: CourseService) {
            if (!param["courseId"] && param["courseId"] === "00000000-0000-0000-0000-000000000000") {
                $state.go("home");
            } else {
                this.Course = new CourseDetailViewModel();
                this.courseService = courseService;
                this.param = param;
                this.courseId = this.param["courseId"];
                this.init();
            }
        }


        init(): void {
            var self = this;
            var request = new DetailRequest(this.courseId);
            self.courseService.getDetail(request).then((response: CourseDetailResponse): CourseDetailResponse => {
                self.Course = response.CourseDetail;
                console.log(self.Course);
                return response;
            });
            console.log("i am in course controller init method");
        }


    }

    angular.module("vta").controller("CourseDetailController", CourseDetailController);
}