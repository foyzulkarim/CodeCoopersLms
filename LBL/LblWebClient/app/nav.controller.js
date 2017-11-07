var Vta;
(function (Vta) {
    "use strict";
    var NavController = (function () {
        function NavController() {
            var self = this;
            self.isSignedIn = true;
        }
        return NavController;
    }());
    NavController.$inject = [];
    Vta.NavController = NavController;
    angular.module("app").controller("NavController", NavController);
})(Vta || (Vta = {}));
//# sourceMappingURL=nav.controller.js.map