module App {

    export class Student  {
   
        id: string;
        name: string;
        phone: string;
    }

    export class BaseRequestModel {
        orderBy: string;
        isAscending: boolean;
        page: number;
        keyword: string;
    }

    class StudentController {

        model: Student;
        service: StudentService;

        static $inject = ["StudentService"];
        constructor(studentService: StudentService) {
            this.model = new Student();
            this.service = studentService;
            console.log("I am in student controller");
        }

        add(): void {
            var self = this;
            let success = function (response) {
                console.log(response);
                self.reset();
            };

            let error = function (errorReason) {
                console.error(errorReason);
            };

            this.service.save(self.model).then(success, error);

        }

        reset(): void {
            this.model = new Student();
        }
    }

    angular.module('app').controller("StudentController", StudentController);


    class StudentsController {

        searchRequest: BaseRequestModel;
        models: Student[];
        service: StudentService;

        static $inject = ["StudentService"];
        constructor(studentService: StudentService) {
            this.service = studentService;
            let self = this;
            self.models = [];
            self.searchRequest = new BaseRequestModel();
            self.searchRequest.page = 1;
            self.searchRequest.orderBy = "name";
            self.searchRequest.isAscending = false;

            let success = function (response) {
                self.models = response.data;
                console.log(self.models);
            };

            let error = function (errorReason) {
                alert(errorReason);
            }

            console.log('i am in Students controller constructor');
            this.service.search(self.searchRequest).then(success, error);

        }

        search() {
            var self = this;
            let success = function (response) {
                console.log(response);
                self.models = response.data;
            };

            let error = function (errorReason) {
                console.error(errorReason);
            };

            this.service.search(self.searchRequest).then(success, error);
        }

        sort(property: string) {
            var self = this;
            self.searchRequest.orderBy = property;
            self.searchRequest.isAscending = !self.searchRequest.isAscending;
            self.search();
        }

        next() {
            var self = this;
            self.searchRequest.page = self.searchRequest.page + 1;
            self.search();
        }

        previous() {
            var self = this;
            if (self.searchRequest.page > 1) {
                self.searchRequest.page = self.searchRequest.page - 1;
                self.search();
            }
        }
    }

    angular.module('app').controller("StudentsController", StudentsController);
}