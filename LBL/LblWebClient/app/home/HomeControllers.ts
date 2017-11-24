module App {
    class HomeController {
        courseService: CourseService;
        searchText: string;
        courses: Course[];
        requestModel: BaseRequestModel;

        static $inject = ["CourseService"];

        constructor(service: CourseService) {
            let self = this;
            self.courseService = service;

            self.requestModel = new BaseRequestModel();
            self.requestModel.page = 1;
            self.requestModel.orderBy = "Title";
            self.requestModel.isAscending = true;
            self.requestModel.perPageCount = 3;

            self.searchCourses();
        }

        searchCourses(): void {
            var self = this;

            var successCallback = function(response: any){
                self.courses = response.data;
            };
            var errorCallback = function (response: any) {
                console.error(response);
            };

            self.requestModel.keyword = self.searchText;
            self.courseService.search(self.requestModel).then(successCallback, errorCallback);
        }

        next() {
            var self = this;
            self.requestModel.page = self.requestModel.page + 1;
            self.searchCourses();
        }

        previous() {
            var self = this;
            if (self.requestModel.page > 1) {
                self.requestModel.page = self.requestModel.page - 1;
                self.searchCourses();
            }
        }
    }

    angular.module("app").controller("HomeController", HomeController);
}