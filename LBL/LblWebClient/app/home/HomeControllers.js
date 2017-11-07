var App;
(function (App) {
    var HomeController = (function () {
        function HomeController() {
            var self = this;
            console.log("I am in home controller");
            this.now = new Date().toString();
        }
        return HomeController;
    }());
    HomeController.$inject = [];
    angular.module("app").controller("HomeController", HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeControllers.js.map