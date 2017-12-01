var App;
(function (App) {
    var AccountService = (function () {
        function AccountService(baseRepository, q) {
        }
        return AccountService;
    }());
    AccountService.$inject = ["BaseRepository", "$q"];
    App.AccountService = AccountService;
    angular.module('app').service('AccountService', AccountService);
})(App || (App = {}));
//# sourceMappingURL=AccountService.js.map