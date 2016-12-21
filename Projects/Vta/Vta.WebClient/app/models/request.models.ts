module Vta {
    "use strict";

    export class SigninRequest {
        email: string;
        password: string;

        constructor(email: string, password: string) {
            this.email = email;
            this.password = password;
        }
    }

    export class RegisterRequest {
        email: string;
        password: string;
        confirmPassword: string;

        constructor(email: string, password: string, confirmPassword: string) {
            this.email = email;
            this.password = password;
            this.confirmPassword = confirmPassword;
        }
    }

    export class AccountInfo {
        userName: string;
        authToken: string;
        accessToken: string;
        isAuth: boolean;
    }

    export class PermissionRequest {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    export class Notification {
        isError: boolean;
        isInfo: boolean;
    }

    export class DataRequest {
        page: number;
        orderBy: string;
        keyword: string;

        protected getBaseQueryString(): string {
            if (this.page == null) this.page = 1;
            var queryString = `?keyword=${this.keyword}&orderBy=${this.orderBy}&page=${this.page}`;
            return queryString;
        }

    }

    export class CourseListRequest extends DataRequest {
        getQueryString(): string {
            if (this.keyword == null) this.keyword = "";
            if (this.orderBy == null) this.orderBy = "Name";
            return super.getBaseQueryString();
        }
    }

    export class CourseSaveRequest {
        name: string;
        description: string;
        prerequisite: string;
        fee: number;
        duration: string;
        imagePath: string;
        videoPath: string;
    }
}