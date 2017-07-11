var app;
(function (app) {
    "use strict";
    var HomeService = (function () {
        function HomeService($q, $http) {
            this.$q = $q;
            this.$http = $http;
        }
        HomeService.prototype.get = function () {
            return this.$http.get("api/Home/GetWelcome").then(function (response) {
                return response.data;
            });
        };
        return HomeService;
    }());
    HomeService.$inject = ["$q", "$http"];
    angular
        .module("app")
        .service(inject.homeService, HomeService);
})(app || (app = {}));
//# sourceMappingURL=home.service.js.map