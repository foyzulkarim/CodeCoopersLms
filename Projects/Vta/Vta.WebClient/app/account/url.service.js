var Vta;
(function (Vta) {
    "use strict";
    var UrlService = (function () {
        function UrlService() {
            var baseUrl = "http://localhost:3027";
            var baseApi = baseUrl + "/api";
            this.signinUrl = baseUrl + "/token";
            this.permissionUrl = baseApi + "/Permission";
            this.registerUrl = baseApi + "/Account/Register";
            this.courseUrl = baseApi + "/CourseQuery";
        }
        return UrlService;
    }());
    Vta.UrlService = UrlService;
    angular.module("vta").service("urlService", UrlService);
})(Vta || (Vta = {}));
//# sourceMappingURL=url.service.js.map