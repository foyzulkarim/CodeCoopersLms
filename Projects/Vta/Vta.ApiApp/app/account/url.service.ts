module Vta {
    "use strict";

    export class UrlService {
        SigninUrl: string;
        PermissionUrl: string;
        RegisterUrl: string;
        CourseUrl: string;
        CourseDetailUrl : string;
        ContentDetailUrl: string;
        DownloadUrl : string;

        constructor() {
            var baseUrl = "http://localhost:3027";
            baseUrl = "";
            var baseApi = baseUrl + "/api";
            this.SigninUrl = baseUrl + "/token";
            this.PermissionUrl = baseApi + "/Permission";
            this.RegisterUrl = baseApi + "/Account/Register";
            this.CourseUrl = baseApi + "/CourseQuery";
            this.CourseDetailUrl = baseApi + "/CourseDetailQuery";
            this.ContentDetailUrl = baseApi + "/ContentDetailQuery";
            this.DownloadUrl = baseApi + "/DownloadQuery";
        }

    }

    angular.module("vta").service("urlService", UrlService);
}