module App {
    export class EnrollmentController extends BaseController<Enrollment> {

        studentService: StudentService;
        selectedStudent: Student;

        courseService: CourseService;
        selectedCourse: Course;
        
        static $inject = ["EnrollmentService", "StudentService", "CourseService"];
        constructor(service: EnrollmentService, studentService: StudentService, courseService: CourseService) {

            super(service);

            console.log("I am in Enrollment Controller");

            this.studentService = studentService;
            this.courseService = courseService;

            if (this.value != null) {
                alert(this.value);
            }

            this.reset();
            this.loadStudent();
            this.loadCourses();
        }

        students: Student[];
        loadStudent(): void {

            var self = this;

            var successCallback = (response: any): void => {
                self.students = response.data;
            };

            var errorCallback = (error: any): void => {
                console.log(error);
            };

            var r = new BaseRequestModel();
            r.page = -1;
            r.orderBy = "Name";
            r.isAscending = true;
            self.studentService.search(r).then(successCallback, errorCallback);
        }

        courses: Course[];
        loadCourses(): void {

            var self = this;

            var successCallback = (response: any): void => {
                self.courses = response.data;
            };

            var errorCallback = (error: any): void => {
                console.log(error);
            };

            var r = new BaseRequestModel();
            r.page = -1;
            r.orderBy = "Title";
            r.isAscending = true;
            self.courseService.search(r).then(successCallback, errorCallback);
        }

        addEnrollment(): void {

            var self = this;

            let successCallback = (response: any): void => {
                alert('Enrollment added successfully');
                self.reset();
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };

            self.model.studentId = self.selectedStudent.id;
            self.model.courseId = self.selectedCourse.id;
            self.model.due = (self.selectedCourse.price <= self.model.paidTotal)
                ? 0
                : (self.selectedCourse.price - self.model.paidTotal);
            self.model.isPaid = (self.model.due <= 0) ? true : false;
            self.model.isCompleted = false;
            self.model.completedContent = 0;
            self.service.save(self.model).then(successCallback, errorCallback);
        }

        value: string;
        setValue(v): void {
            var self = this;
            self.value = v;
        }

        reset(): void {
            var self = this;
            self.model = new Enrollment();
        }
    }
    angular.module('app').controller("EnrollmentController", EnrollmentController);

}