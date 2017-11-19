module App {
    class HomeController {
        courseService: CourseService;
        searchText: string;
        courses: Course[];

        static $inject = ["CourseService"];

        constructor(service: CourseService) {
            let self = this;
            self.courseService = service;
            self.searchText = "";
            self.searchCourses();
        }

        searchCourses(): void {
            var self = this;

            var successCallback = (response: any): void => {
                self.courses = response.data;
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };

            var requestModel = new BaseRequestModel();
            requestModel.page = 1;
            requestModel.orderBy = "Title";
            requestModel.isAscending = true;
            requestModel.keyword = self.searchText;
            self.courseService.search(requestModel).then(successCallback, errorCallback);
        }
    }

    angular.module("app").controller("HomeController", HomeController);
}