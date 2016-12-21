module Vta {
    "use strict";

    export class PermissionService {
        private q: ng.IQService;
        private urlService: UrlService;
        private web: WebService;

        static $inject = ["$q", "urlService", "webService"];

        constructor($q: ng.IQService, urlService: UrlService, webService: WebService) {
            this.q = $q;
            this.urlService = urlService;
            this.web = webService;
        }

        isAllowed(request: string): angular.IPromise<PermissionResponse> {
            var self = this;
            var deffered = self.q.defer();
            self.web.post(self.urlService.permissionUrl, new PermissionRequest(request))
                .then((result: any): any => {
                    var response = new PermissionResponse(true, result.data, "Success");
                    response.isAllowed = true;
                    deffered.resolve(response);
                }, error => {
                    deffered.reject(error);
                });
            return deffered.promise;
        }
    }

    angular.module("vta").service("permissionService", PermissionService);

}