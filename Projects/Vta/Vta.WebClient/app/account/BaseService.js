var Vta;
(function (Vta) {
    "use strict";
    var BaseService = (function () {
        function BaseService($q, urlService, webService) {
            this.q = $q;
            this.url = urlService;
            this.web = webService;
        }
        return BaseService;
    }());
    Vta.BaseService = BaseService;
})(Vta || (Vta = {}));
//# sourceMappingURL=BaseService.js.map