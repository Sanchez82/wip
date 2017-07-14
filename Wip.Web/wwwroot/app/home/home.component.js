var app;
(function (app) {
    var HomeComponent = (function () {
        function HomeComponent(homeService) {
            this.homeService = homeService;
            this.gettedFromServer = "";
            this.registedUser = "";
        }
        HomeComponent.prototype.$onInit = function () {
            var _this = this;
            this.homeService.getWelcome().then(function (response) {
                debugger;
                console.log(response);
                _this.gettedFromServer = response;
            });
            this.homeService.getAllUsers().then(function (response) {
                debugger;
                if (response) {
                    console.log(response.length > 0);
                    _this.registedUser = response[0].name;
                }
            });
        };
        return HomeComponent;
    }());
    HomeComponent.$inject = [inject.homeService];
    var componentOptions = {
        templateUrl: "app/home/home.component.html",
        controller: HomeComponent,
        controllerAs: 'ctrl',
        bindings: {}
    };
    angular
        .module("app")
        .controller("HomeComponent", HomeComponent)
        .component("home", componentOptions);
})(app || (app = {}));
//# sourceMappingURL=home.component.js.map