var app;
(function (app) {
    var MenubarComponent = (function () {
        function MenubarComponent() {
        }
        return MenubarComponent;
    }());
    var componentOptions = {
        templateUrl: "app/menubar/menubar.component.html",
        controller: MenubarComponent,
        controllerAs: 'ctrl',
        bindings: {}
    };
    angular
        .module("app")
        .controller("MenubarComponent", MenubarComponent)
        .component("menuBar", componentOptions);
})(app || (app = {}));
//# sourceMappingURL=menubar.component.js.map