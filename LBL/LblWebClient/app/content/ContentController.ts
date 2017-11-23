module App {
    export class ContentController extends BaseController<Content> {


        courseService: CourseService;
        selectedCourse: Course;
        courses: Course[];
        categoryList: Category[] = [];
        selectedCategory: Category;

        static $inject = ["ContentService", "CourseService"];
        constructor(service: ContentService, courseService: CourseService) {
            super(service);
            this.courseService = courseService;
            this.reset();
            this.loadCourses();
            this.loadCategoryList();
        }

        loadCourses(): void {
            var self = this;

            let successCallBack = function (response) {
                self.courses = response.data;
            }
            let errorCallBack = function (response) {
                console.error(response);
            }

            var requestModel = new BaseRequestModel();
            requestModel.page = -1;
            requestModel.orderBy = "Title";
            requestModel.isAscending = true;

            self.courseService.search(requestModel).then(successCallBack, errorCallBack);
        }

        loadCategoryList(): void {
            var self = this;
            self.categoryList.push(new Category(1, "Video"));
            self.categoryList.push(new Category(2, "Audio"));
            self.categoryList.push(new Category(3, "Document"));
        }

        addContent(): void {
            var self = this;

            let successCallback = (response: any): void => {
                alert('Content added successfully');
                self.reset();
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };

            self.model.courseId = self.selectedCourse.id;
            self.model.category = self.selectedCategory.id;
            self.service.save(self.model).then(successCallback, errorCallback);
        }

        reset() {
            var self = this;
            self.model = new Content();
        }

    }

    angular.module('app').controller('ContentController', ContentController);
}