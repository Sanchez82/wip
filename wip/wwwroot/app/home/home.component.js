var app;
(function (app) {
    var HomeComponent = (function () {
        function HomeComponent() {
        }
        HomeComponent.prototype.$onInit = function () {
            debugger;
            //Debugger33333
        };
        return HomeComponent;
    }());
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