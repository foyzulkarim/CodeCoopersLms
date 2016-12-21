module Vta {
    "use strict";

    export class UrlService {
        signinUrl: string;
        permissionUrl: string;
        registerUrl: string;
        courseUrl: string;

        constructor() {
            var baseUrl = "http://localhost:3027";
            var baseApi = baseUrl + "/api";
            this.signinUrl = baseUrl + "/token";
            this.permissionUrl = baseApi + "/Permission";
            this.registerUrl = baseApi + "/Account/Register";
            this.courseUrl = baseApi + "/CourseQuery";
        }


    }

    angular.module("vta").service("urlService", UrlService);
}