var app;
(function (app) {
    "use strict";
    var LoginService = (function () {
        function LoginService($q, $http) {
            this.$q = $q;
            this.$http = $http;
        }
        return LoginService;
    }());
    LoginService.$inject = ["$q", "$http"];
    angular
        .module("app")
        .service(inject.loginService, LoginService);
})(app || (app = {}));
//# sourceMappingURL=login.service.js.map