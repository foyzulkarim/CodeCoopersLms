module App {
    export class ContentController extends BaseController<Content> {


        courseService: CourseService;
        selectedCourse: Course;
        courses: Course[];
        categoryList: Category[] = [];

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

        reset() {
            throw new Error("Method not implemented.");
        }

    }
}