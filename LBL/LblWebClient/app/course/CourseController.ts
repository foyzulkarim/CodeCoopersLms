module App {
    export class CourseController extends BaseController<Course> {
  
        levelOfAudiences: string[] = [];
        teacherService : TeacherService;
       
        static $inject = ["CourseService","TeacherService"];
        constructor(service: CourseService, teacherService: TeacherService) {
            super(service);
            console.log("I am in Course Controller");
            this.teacherService = teacherService;
            
            this.model = new Course();
            this.model.publishDate = new Date();
            this.loadTeachers();
        }

        teachers: Teacher[];
        loadTeachers(): void {
            var self = this;
            var successCallback = (response: any): void => {
                console.log('teacher list - ',response.data);
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

        //groupChanged(): void {
        //    console.log(this.model.productGroupId);
        //}


        reset(): void {
            this.model = new Course();
        }
    }
    angular.module('app').controller("CourseController", CourseController);
}