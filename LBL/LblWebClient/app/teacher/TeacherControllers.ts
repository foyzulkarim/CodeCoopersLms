module App {
     class TeacherController extends BaseController<Teacher> {
 
        static $inject = ["TeacherService"];
        constructor(service: TeacherService) {
            super(service);
            this.model = new Teacher();            
        }
          
        reset(): void {
            this.model = new Teacher();
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