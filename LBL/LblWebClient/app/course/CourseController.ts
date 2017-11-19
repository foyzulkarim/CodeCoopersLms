module App {
    export class CourseController extends BaseController<Course> {
  
        levelOfAudiences: string[] = [];
        teacherService: TeacherService;
        selectedTeacher: Teacher;
       
        static $inject = ["CourseService","TeacherService"];
        constructor(service: CourseService, teacherService: TeacherService) {
            super(service);
            console.log("I am in Course Controller");
            this.teacherService = teacherService;

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


        reset(): void {
            var self = this;
            self.model = new Course();
            self.model.publishDate = new Date();
        }
    }
    angular.module('app').controller("CourseController", CourseController);
}