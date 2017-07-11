var app;
(function (app) {
    var HomeComponent = (function () {
        function HomeComponent(homeService) {
            this.homeService = homeService;
            this.gettedFromServer = "";
        }
        HomeComponent.prototype.$onInit = function () {
            var _this = this;
            this.homeService.get().then(function (response) {
                debugger;
                console.log(response);
                _this.gettedFromServer = response;
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