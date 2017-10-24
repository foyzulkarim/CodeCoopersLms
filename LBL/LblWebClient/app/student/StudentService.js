var App;
(function (App) {
    var StudentService = (function () {
        function StudentService(http, q) {
            this.students = [];
            this.http = http;
            this.q = q;
        }
        StudentService.prototype.save = function (student) {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.post("http://localhost:30285/api/student", student).then(f1, f2);
            return deffered.promise;
        };
        StudentService.prototype.search = function (request) {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.post("http://localhost:30285/api/StudentQuery", request).then(f1, f2);
            return deffered.promise;
        };
        return StudentService;
    }());
    StudentService.$inject = ["$http", "$q"];
    App.StudentService = StudentService;
    angular.module('app').service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map