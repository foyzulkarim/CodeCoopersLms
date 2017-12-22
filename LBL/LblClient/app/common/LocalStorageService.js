var App;
(function (App) {
    var LocalStorageKeys;
    (function (LocalStorageKeys) {
        LocalStorageKeys[LocalStorageKeys["UserInfo"] = 0] = "UserInfo";
    })(LocalStorageKeys = App.LocalStorageKeys || (App.LocalStorageKeys = {}));
    var LocalStorageService = /** @class */ (function () {
        function LocalStorageService() {
            this.storage = localStorage;
        }
        LocalStorageService.prototype.save = function (key, value) {
            var string = key.toString();
            this.storage.setItem(string, value);
        };
        LocalStorageService.prototype.get = function (key) {
            var string = key.toString();
            return this.storage.getItem(string);
        };
        return LocalStorageService;
    }());
    App.LocalStorageService = LocalStorageService;
    angular.module('app').service('LocalStorageService', LocalStorageService);
})(App || (App = {}));
//# sourceMappingURL=LocalStorageService.js.map