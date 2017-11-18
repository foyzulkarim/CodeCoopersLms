module App {
     class TeacherController extends BaseController<Teacher> {
 
        static $inject = ["TeacherService"];
        constructor(service: TeacherService) {
            super(service);
            this.reset();        
        }
          
        reset(): void {
            this.model = new Teacher();
            this.model.address = "Dhaka";
            this.model.designation = "Trainer";
            this.model.email = "t@codecoopers.com";
            this.model.phone = "123";
        }
    }

    angular.module('app').controller("TeacherController", TeacherController);


    class TeachersController extends BaseController<Teacher>{

        reset() {
            
        }
        
        static $inject = ["TeacherService"];
        constructor(service: TeacherService) {
            super(service);                   
        }         
    }

    angular.module('app').controller("TeachersController", TeachersController);
}