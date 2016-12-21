var Vta;
(function (Vta) {
    var SigninService = (function () {
        function SigninService($q, $http, urlService) {
            this.qService = $q;
            this.httpService = $http;
            this.urlService = urlService;
            this.config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
        }
        SigninService.prototype.signin = function (request) {
            var self = this;
            var deffered = self.qService.defer();
            var nr = "username=" + request.email + "&password=" + request.password + "&grant_type=password";
            self.httpService.post(self.urlService.signinUrl, nr, self.config).then(function (result) {
                if (result.status === 200) {
                    var response = new Vta.AccountInfo();
                    response.userName = result.data.userName;
                    response.authToken = result.data.AuthToken;
                    response.accessToken = result.data.access_token;
                    deffered.resolve(response);
                }
                else {
                    deffered.reject(result);
                }
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        SigninService.$inject = ['$q', '$http', 'urlService'];
        return SigninService;
    })();
    Vta.SigninService = SigninService;
    angular.module('vta').service('signinService', SigninService);
})(Vta || (Vta = {}));
//# sourceMappingURL=signin.service.js.map