var App;
(function (App) {
    var Student = (function () {
        function Student() {
        }
        return Student;
    }());
    App.Student = Student;
    var StudentRequestModel = (function () {
        function StudentRequestModel() {
        }
        return StudentRequestModel;
    }());
    App.StudentRequestModel = StudentRequestModel;
    var StudentController = (function () {
        function StudentController(studentService) {
            this.student = new Student();
            this.studentService = studentService;
            console.log("I am in student controller");
        }
        StudentController.prototype.add = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.reset();
            };
            var error = function (errorReason) {
                console.error(errorReason);
            };
            this.studentService.save(self.student).then(success, error);
        };
        StudentController.prototype.reset = function () {
            this.student = new Student();
        };
        return StudentController;
    }());
    StudentController.$inject = ["StudentService"];
    angular.module('app').controller("StudentController", StudentController);
    var StudentsController = (function () {
        function StudentsController(studentService) {
            this.studentService = studentService;
            var self = this;
            self.students = [];
            self.searchRequest = new StudentRequestModel();
            self.searchRequest.page = 1;
            var success = function (response) {
                self.students = response.data;
                console.log(self.students);
            };
            var error = function (errorReason) {
                alert(errorReason);
            };
            console.log('i am in Students controller constructor');
            this.studentService.search(self.searchRequest).then(success, error);
        }
        StudentsController.prototype.search = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.students = response.data;
            };
            var error = function (errorReason) {
                console.error(errorReason);
            };
            this.studentService.search(self.searchRequest).then(success, error);
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
    StudentsController.$inject = ["StudentService"];
    angular.module('app').controller("StudentsController", StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map