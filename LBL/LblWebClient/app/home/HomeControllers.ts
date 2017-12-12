module App {
    class HomeController {
        courseService: CourseService;
        searchText: string;
        courses: Course[];
        requestModel: BaseRequestModel;
        $scope: angular.IScope;

        static $inject = ["CourseService", "$scope"];

        constructor(service: CourseService, scope: angular.IScope) {
            let self = this;
            self.courseService = service;
            this.$scope = scope;
            self.requestModel = new BaseRequestModel();
            self.requestModel.page = 1;
            self.requestModel.orderBy = "Title";
            self.requestModel.isAscending = true;
            self.requestModel.perPageCount = 3;
            self.requestModel.keyword = "";
            self.searchCourses();
            self.$scope.$on("signedOut", this.signedOutSuccessfully2);
        }
        
        signedOutSuccessfully2(p: any, q: any): void {
            console.log('HomeController signedOut: ');
            console.log(p, q);
        }


        searchCourses(): void {
            var self = this;

            var successCallback = function(response: any){
                self.courses = response.data;
            };
            var errorCallback = function (response: any) {
                console.error(response);
            };

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