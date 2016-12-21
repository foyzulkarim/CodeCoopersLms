var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vta;
(function (Vta) {
    "use strict";
    var SigninRequest = (function () {
        function SigninRequest(email, password) {
            this.email = email;
            this.password = password;
        }
        return SigninRequest;
    })();
    Vta.SigninRequest = SigninRequest;
    var RegisterRequest = (function () {
        function RegisterRequest(email, password, confirmPassword) {
            this.email = email;
            this.password = password;
            this.confirmPassword = confirmPassword;
        }
        return RegisterRequest;
    })();
    Vta.RegisterRequest = RegisterRequest;
    var AccountInfo = (function () {
        function AccountInfo() {
        }
        return AccountInfo;
    })();
    Vta.AccountInfo = AccountInfo;
    var PermissionRequest = (function () {
        function PermissionRequest(name) {
            this.name = name;
        }
        return PermissionRequest;
    })();
    Vta.PermissionRequest = PermissionRequest;
    var Notification = (function () {
        function Notification() {
        }
        return Notification;
    })();
    Vta.Notification = Notification;
    var DataRequest = (function () {
        function DataRequest() {
        }
        DataRequest.prototype.getBaseQueryString = function () {
            if (this.page == null)
                this.page = 1;
            var queryString = "?keyword=" + this.keyword + "&orderBy=" + this.orderBy + "&page=" + this.page;
            return queryString;
        };
        return DataRequest;
    })();
    Vta.DataRequest = DataRequest;
    var CourseListRequest = (function (_super) {
        __extends(CourseListRequest, _super);
        function CourseListRequest() {
            _super.apply(this, arguments);
        }
        CourseListRequest.prototype.getQueryString = function () {
            if (this.keyword == null)
                this.keyword = "";
            if (this.orderBy == null)
                this.orderBy = "Name";
            return _super.prototype.getBaseQueryString.call(this);
        };
        return CourseListRequest;
    })(DataRequest);
    Vta.CourseListRequest = CourseListRequest;
    var CourseSaveRequest = (function () {
        function CourseSaveRequest() {
        }
        return CourseSaveRequest;
    })();
    Vta.CourseSaveRequest = CourseSaveRequest;
})(Vta || (Vta = {}));
//# sourceMappingURL=request.models.js.map