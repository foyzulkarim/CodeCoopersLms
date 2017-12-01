var App;
(function (App) {
    var ApiResponseStatus = (function () {
        function ApiResponseStatus() {
        }
        return ApiResponseStatus;
    }());
    ApiResponseStatus.statusOk = 200;
    ApiResponseStatus.statusBad = 400;
    App.ApiResponseStatus = ApiResponseStatus;
    var AccountController = (function () {
        function AccountController(baseRepository) {
            this.baseRepository = baseRepository;
            this.subUrl = new App.UrlService().account;
            this.reset();
        }
        AccountController.prototype.register = function () {
            var self = this;
            var successCallback = function (response) {
                if (response.status == ApiResponseStatus.statusOk) {
                    alert("Sign up successfull");
                }
                else if (response.status == ApiResponseStatus.statusBad) {
                    alert(response.modelState);
                }
            };
            var errorCallback = function (response) {
                alert(response.modelState);
                console.error(response);
            };
            self.baseRepository.post(self.subUrl + "/Register", self.user).then(successCallback, errorCallback);
        };
        AccountController.prototype.reset = function () {
            var self = this;
            self.user = new App.User();
        };
        return AccountController;
    }());
    AccountController.$inject = ["BaseRepository"];
    App.AccountController = AccountController;
    angular.module('app').controller('AccountController', AccountController);
})(App || (App = {}));
//# sourceMappingURL=AccountController.js.map