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
            var storageKey = this.getStorageKey(key);
            var storageValue = JSON.stringify(value);
            this.storage.setItem(storageKey, storageValue);
        };
        LocalStorageService.prototype.get = function (key) {
            var storageKey = this.getStorageKey(key);
            var strItem = this.storage.getItem(storageKey);
            var item = JSON.parse(strItem);
            return item;
        };
        LocalStorageService.prototype.remove = function (key) {
            var storageKey = this.getStorageKey(key);
            this.storage.removeItem(storageKey);
        };
        LocalStorageService.prototype.getStorageKey = function (key) {
            var storageKey = LocalStorageKeys[key].toString();
            return storageKey;
        };
        return LocalStorageService;
    }());
    App.LocalStorageService = LocalStorageService;
    angular.module('app').service('LocalStorageService', LocalStorageService);
})(App || (App = {}));
//# sourceMappingURL=LocalStorageService.js.map