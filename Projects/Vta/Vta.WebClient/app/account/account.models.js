var Vta;
(function (Vta) {
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
})(Vta || (Vta = {}));
