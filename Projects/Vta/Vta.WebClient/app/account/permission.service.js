var Vta;
(function (Vta) {
    "use strict";
    var PermissionService = (function () {
        function PermissionService($q, urlService, webService) {
            this.q = $q;
            this.urlService = urlService;
            this.web = webService;
        }
        PermissionService.prototype.isAllowed = function (request) {
            var self = this;
            var deffered = self.q.defer();
            self.web.post(self.urlService.permissionUrl, new Vta.PermissionRequest(request))
                .then(function (result) {
                var response = new Vta.PermissionResponse(true, result.data, "Success");
                response.isAllowed = true;
                deffered.resolve(response);
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        PermissionService.$inject = ["$q", "urlService", "webService"];
        return PermissionService;
    }());
    Vta.PermissionService = PermissionService;
    angular.module("vta").service("permissionService", PermissionService);
})(Vta || (Vta = {}));
//# sourceMappingURL=permission.service.js.map