module App {


    export  class Entity {
        id: string;
        createdBy: string;
        modifiedBy: string;
        created: Date;
        modified:Date;

    }

    export class Teacher extends  Entity{
       
        name: string;

    }
     
    class TeacherController {

        model: Teacher;
        service: TeacherService;

        static $inject = ["TeacherService"];
        constructor(service: TeacherService) {
            this.model = new Teacher();
            this.service = service;
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
            this.model = new Teacher();
        }
    }

    angular.module('app').controller("TeacherController", TeacherController);


    class TeachersController {

        searchRequest: BaseRequestModel;
        models: Teacher[];
        service: TeacherService;

        static $inject = ["TeacherService"];
        constructor(service: TeacherService) {
            this.service = service;
            let self = this;
            self.models = [];
            self.searchRequest = new BaseRequestModel();
            self.searchRequest.page = 1;

            let success = function (response) {
                self.models = response.data;
                console.log(self.models);
            };

            let error = function (errorReason) {
                alert(errorReason);
            }

            console.log('i am in Teachers controller constructor');
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

    angular.module('app').controller("TeachersController", TeachersController);
}