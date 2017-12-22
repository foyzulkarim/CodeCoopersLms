var App;
(function (App) {
    var HomeController = /** @class */ (function () {
        function HomeController() {
            console.log('i am in home');
            this.message = new Date().toDateString();
        }
        return HomeController;
    }());
    angular.module('app').controller('HomeController', (HomeController));
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map