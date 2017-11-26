module App {
    export class CourseController extends BaseController<Course> {

        levelOfAudiences: string[] = [];
        teacherService: TeacherService;
        selectedTeacher: Teacher;

        static $inject = ["CourseService", "TeacherService"];
        constructor(service: CourseService, teacherService: TeacherService) {
            super(service);
            console.log("I am in Course Controller");
            this.teacherService = teacherService;
            if (this.value != null) {
                alert(this.value);
            }
            this.reset();
            this.loadTeachers();
        }

        teachers: Teacher[];
        loadTeachers(): void {
            var self = this;
            var successCallback = (response: any): void => {
                self.teachers = response.data;
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };

            var r = new BaseRequestModel();
            r.page = -1;
            r.orderBy = "Name";
            r.isAscending = true;
            self.teacherService.search(r).then(successCallback, errorCallback);
        }

        addCourse(): void {
            var self = this;

            let successCallback = (response: any): void => {
                alert('Course added successfully');
                self.reset();
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };

            self.model.teacherId = self.selectedTeacher.id;
            self.service.save(self.model).then(successCallback, errorCallback);
        }

        value: string;
        setValue(v): void {
            var self = this;
            self.value = v;
        }

        reset(): void {
            var self = this;
            self.model = new Course();
            self.model.publishDate = new Date();
        }
    }
    angular.module('app').controller("CourseController", CourseController);

    export class CourseContentsController extends BaseController<Content> {

        stateParams: angular.ui.IStateService;
        courseTitle: string;
        activeContent: Content;
        sceService: angular.ISCEService;

        static $inject = ["ContentService", "$stateParams", "$sce"];

        constructor(service: ContentService, $stateParams: angular.ui.IStateService, $sce: angular.ISCEService) {
            super(service);
            var self = this;
            self.stateParams = $stateParams;
            self.sceService = $sce;

            self.searchRequest.page = -1;
            self.searchRequest.perPageCount = 100;
            self.searchRequest.orderBy = "Serial";
            self.searchRequest.isAscending = true;
            self.searchRequest.keyword = self.stateParams["id"];

            self.activeContent = new Content();

            self.getCourseContents();
        }

        getCourseContents(): void {
            var self = this;

            let successCallBack = function (response) {
                self.models = response.data;
                self.courseTitle = self.models[0].courseTitle;
                self.setActiveContent(self.models[0]);
                console.log(self.courseTitle);
            }
            let errorCallBack = function (response) {
                console.error(response);
            }

            self.service.search(self.searchRequest).then(successCallBack, errorCallBack);
        }

        setActiveContent(content: Content): void {
            var self = this;
            self.activeContent = content;
            self.activeContent.url = self.sceService.trustAsResourceUrl(content.url);
        }

        reset() {
            throw new Error("Method not implemented.");
        }

    }

    angular.module('app').controller("CourseContentsController", CourseContentsController);

}