module Vta {
    "use strict";

    export abstract class BaseResponse {
        isSuccess: boolean;
        private data: any;
        message: string;

        constructor(isSuccess: boolean, data: any, message: string) {
            this.isSuccess = isSuccess;
            this.data = data;
            this.message = message == null ? "Success" : message;
        }
    }

    export class PermissionResponse extends BaseResponse {
        isAllowed: boolean;
    }

    export class RegisterResponse extends BaseResponse {
        isRegistered: boolean;
        userName: string;
    }

    export class ErrorResponse extends BaseResponse {
        exception: string;
    }

    export class CourseListResponse extends BaseResponse {
        Courses: CourseViewModel[];
    }

    export class CourseResponse extends BaseResponse {
        Course: CourseViewModel;
    }
}