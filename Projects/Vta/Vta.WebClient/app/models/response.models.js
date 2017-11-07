var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vta;
(function (Vta) {
    "use strict";
    var BaseResponse = (function () {
        function BaseResponse(isSuccess, data, message) {
            this.isSuccess = isSuccess;
            this.data = data;
            this.message = message == null ? "Success" : message;
        }
        return BaseResponse;
    }());
    Vta.BaseResponse = BaseResponse;
    var PermissionResponse = (function (_super) {
        __extends(PermissionResponse, _super);
        function PermissionResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PermissionResponse;
    }(BaseResponse));
    Vta.PermissionResponse = PermissionResponse;
    var RegisterResponse = (function (_super) {
        __extends(RegisterResponse, _super);
        function RegisterResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RegisterResponse;
    }(BaseResponse));
    Vta.RegisterResponse = RegisterResponse;
    var ErrorResponse = (function (_super) {
        __extends(ErrorResponse, _super);
        function ErrorResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ErrorResponse;
    }(BaseResponse));
    Vta.ErrorResponse = ErrorResponse;
    var CourseListResponse = (function (_super) {
        __extends(CourseListResponse, _super);
        function CourseListResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CourseListResponse;
    }(BaseResponse));
    Vta.CourseListResponse = CourseListResponse;
    var CourseResponse = (function (_super) {
        __extends(CourseResponse, _super);
        function CourseResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CourseResponse;
    }(BaseResponse));
    Vta.CourseResponse = CourseResponse;
})(Vta || (Vta = {}));
//# sourceMappingURL=response.models.js.map