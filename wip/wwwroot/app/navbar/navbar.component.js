var app;
(function (app) {
    app.navBar = "appNavBar";
    var NavBarComponent = (function () {
        function NavBarComponent(navBarService) {
            this.navBarService = navBarService;
        }
        Object.defineProperty(NavBarComponent.prototype, "navName", {
            get: function () { return app.navBar; },
            enumerable: true,
            configurable: true
        });
        NavBarComponent.prototype.$onInit = function () {
            this.buttons = [];
        };
        NavBarComponent.prototype.$onChanges = function (onChangesObj) {
        };
        NavBarComponent.prototype.close = function () {
            this.navBarService.close();
        };
        NavBarComponent.prototype.open = function () {
            this.navBarService.open();
        };
        //Buttons bindings
        NavBarComponent.prototype.buttonAction = function (button) {
            if (!button || !button.action)
                return;
            if (typeof button.action !== 'function')
                return;
            button.action();
        };
        NavBarComponent.prototype.buttonClass = function (button) {
            if (!button || !button.class)
                return;
            return button.class;
        };
        NavBarComponent.prototype.buttonLabel = function (button) {
            if (!button || !button.label)
                return;
            return button.label;
        };
        NavBarComponent.prototype.buttonIcon = function (button) {
            if (!button || !button.icon)
                return;
            return button.icon;
        };
        NavBarComponent.prototype.buttonText = function (button) {
            if (!button || !button.text)
                return;
            return button.text;
        };
        NavBarComponent.prototype.buttonShowCondition = function (button) {
            if (!button || !button.showCondition)
                return true;
            if (typeof button.showCondition === 'boolean')
                return button.showCondition;
            if (typeof button.showCondition === 'function')
                return button.showCondition();
            return false;
        };
        return NavBarComponent;
    }());
    NavBarComponent.$inject = [
        inject.navbarService
    ];
    var componentOptions = {
        templateUrl: "app/navbar/navbar.component.html",
        controller: NavBarComponent,
        controllerAs: 'ctrl',
        bindings: {}
    };
    angular
        .module("app")
        .controller("NavBarComponent", NavBarComponent)
        .component("navbar", componentOptions);
})(app || (app = {}));
//# sourceMappingURL=navbar.component.js.map