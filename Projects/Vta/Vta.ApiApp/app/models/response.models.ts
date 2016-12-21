module Vta {
    "use strict";

    export class BaseResponse {
        IsSuccess: boolean;
        private data: any;
        Message: string;

        constructor(isSuccess: boolean, data: any, message: string) {
            this.IsSuccess = isSuccess;
            this.data = data;
            this.Message = message == null ? "Success" : message;
        }
    }

    export class PermissionResponse extends BaseResponse {
        IsAllowed: boolean;
    }

    export class RegisterResponse extends BaseResponse {
        IsRegistered: boolean;
        UserName: string;
    }

    export class ErrorResponse extends BaseResponse {
        Exception: string;
    }

    export class CourseListResponse extends BaseResponse {
        Courses: CourseViewModel[];
    }

    export class CourseResponse extends BaseResponse {
        Course: CourseViewModel;
    }

    export class CourseDetailResponse extends BaseResponse {
        CourseDetail: CourseDetailViewModel;
    }

    export class ContentDetailResponse extends BaseResponse {
        ContentDetail: ContentDetailViewModel;
    }
}