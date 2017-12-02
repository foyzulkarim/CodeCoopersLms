module App {
    export class AppConstants {
        constructor() {

        }
        static BaseUrl = "http://localhost:30285/"
        static StatusOk = 200;
        static StatusBad = 400;
        static BaseApiUrl = AppConstants.BaseUrl + "api/";
        static UserAuthenticationUrl = AppConstants.BaseUrl + "token";
    }
}