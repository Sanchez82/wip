var inject;
(function (inject) {
    "use strict";
    //Services
    inject.toolbarService = "toolbarService";
    inject.navbarService = "navbarService";
    inject.homeService = "homeService";
    inject.loginService = "loginService";
    //Routing States
    angular.module("inject", ["app"]);
})(inject || (inject = {}));
//# sourceMappingURL=constants.js.map