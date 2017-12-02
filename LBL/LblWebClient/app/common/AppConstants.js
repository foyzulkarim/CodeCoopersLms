var App;
(function (App) {
    var AppConstants = (function () {
        function AppConstants() {
        }
        return AppConstants;
    }());
    AppConstants.BaseUrl = "http://localhost:30285/";
    AppConstants.StatusOk = 200;
    AppConstants.StatusBad = 400;
    AppConstants.BaseApiUrl = AppConstants.BaseUrl + "api/";
    AppConstants.UserAuthenticationUrl = AppConstants.BaseUrl + "token";
    App.AppConstants = AppConstants;
})(App || (App = {}));
//# sourceMappingURL=AppConstants.js.map