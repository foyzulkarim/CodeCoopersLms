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
        Email: string;
        Password: string;
        ConfirmPassword: string;

        constructor(email: string, password: string, confirmPassword: string) {
            this.Email = email;
            this.Password = password;
            this.ConfirmPassword = confirmPassword;
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
        IsError: boolean;
        IsInfo: boolean;
        Message: string;
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

    export class DetailRequest extends DataRequest {
        Id: string;

        constructor(id: string) {
            super();
            this.Id = id;           
        }

        getQueryString(): string {
            return '?id=' + this.Id;
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