var app;
(function (app) {
    var NavbarService = (function () {
        function NavbarService($mdSidenav, $mdComponentRegistry) {
            this.$mdSidenav = $mdSidenav;
            this.$mdComponentRegistry = $mdComponentRegistry;
        }
        NavbarService.prototype.init = function () {
            this.activeButtons = [
                {
                    action: function () { alert("first button actions"); },
                    text: "Add Rule",
                    label: "New Rule",
                    class: "md-primary",
                    icon: ""
                }
            ];
        };
        NavbarService.prototype.setButtons = function (buttons) { };
        NavbarService.prototype.getButtons = function () { return this.activeButtons; };
        NavbarService.prototype.open = function () {
            this.$mdSidenav(app.navBar).open();
        };
        NavbarService.prototype.close = function () {
            this.$mdSidenav(app.navBar).close();
        };
        return NavbarService;
    }());
    NavbarService.$inject = [
        "$mdSidenav",
        "$mdComponentRegistry"
    ];
    angular
        .module("app")
        .service(inject.navbarService, NavbarService);
})(app || (app = {}));
//# sourceMappingURL=navbar.service.js.map