module App {
    class StudentController extends BaseController<Student> {

        static $inject = ["StudentService"];
        constructor(service: StudentService) {
            super(service);
            this.model = new Student();
            console.log("I am in student controller");
            this.searchRequest["due"] = 0;
        }
        
        reset(): void {
            this.model = new Student();
        }
    }

    angular.module('app').controller("StudentController", StudentController);


    class StudentsController extends BaseController<Student>{

        reset() { }
         
        static $inject = ["StudentService"];
        constructor(service: StudentService) {
            super(service);          
            console.log('i am in Students controller constructor');      
            this.search();
        }        
    }

    angular.module('app').controller("StudentsController", StudentsController);
}