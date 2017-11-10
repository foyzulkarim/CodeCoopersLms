var App;
(function (App) {
    var Student = (function () {
        function Student() {
        }
        return Student;
    }());
    App.Student = Student;
    var BaseRequestModel = (function () {
        function BaseRequestModel() {
        }
        return BaseRequestModel;
    }());
    App.BaseRequestModel = BaseRequestModel;
    var StudentController = (function () {
        function StudentController() {
            this.model = new Student();
            //  this.service = studentService;
            console.log("I am in student controller");
        }
        StudentController.prototype.save = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.reset();
            };
            var error = function (errorReason) {
                console.error(errorReason);
            };
            console.log(self.model);
            this.service.save(self.model).then(success, error);
        };
        StudentController.prototype.reset = function () {
            this.model = new Student();
        };
        return StudentController;
    }());
    StudentController.$inject = [];
    angular.module('app').controller("StudentController", StudentController);
    var StudentsController = (function () {
        function StudentsController() {
            //  this.service = studentService;
            var self = this;
            self.models = [];
            self.searchRequest = new BaseRequestModel();
            self.searchRequest.page = 1;
            self.searchRequest.orderBy = "name";
            self.searchRequest.isAscending = false;
            var success = function (response) {
                self.models = response.data;
                console.log(self.models);
            };
            var error = function (errorReason) {
                alert(errorReason);
            };
            console.log('i am in Students controller constructor');
            //this.service.search(self.searchRequest).then(success, error);
        }
        StudentsController.prototype.search = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.models = response.data;
            };
            var error = function (errorReason) {
                console.error(errorReason);
            };
            //this.service.search(self.searchRequest).then(success, error);
        };
        StudentsController.prototype.sort = function (property) {
            var self = this;
            self.searchRequest.orderBy = property;
            self.searchRequest.isAscending = !self.searchRequest.isAscending;
            self.search();
        };
        StudentsController.prototype.next = function () {
            var self = this;
            self.searchRequest.page = self.searchRequest.page + 1;
            self.search();
        };
        StudentsController.prototype.previous = function () {
            var self = this;
            if (self.searchRequest.page > 1) {
                self.searchRequest.page = self.searchRequest.page - 1;
                self.search();
            }
        };
        return StudentsController;
    }());
    //service: StudentService;
    StudentsController.$inject = [];
    angular.module('app').controller("StudentsController", StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map