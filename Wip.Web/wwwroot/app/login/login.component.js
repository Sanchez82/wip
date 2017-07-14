var app;
(function (app) {
    var LoginComponent = (function () {
        function LoginComponent(loginService) {
            this.loginService = loginService;
        }
        LoginComponent.prototype.$onInit = function () {
        };
        LoginComponent.prototype.login = function () {
            debugger;
            if (this.username && this.password) {
                alert("Adesso e solo adesso faccio la chiamata al server. Dove il server mi ritorna il access token.");
                return;
            }
            alert("Devi scrivere sia la username che password!!! ");
        };
        return LoginComponent;
    }());
    LoginComponent.$inject = [inject.loginService];
    var componentOptions = {
        templateUrl: "app/login/login.component.html",
        controller: LoginComponent,
        controllerAs: 'ctrl',
        bindings: {}
    };
    angular
        .module("app")
        .controller("LoginComponent", LoginComponent)
        .component("login", componentOptions);
})(app || (app = {}));
//# sourceMappingURL=login.component.js.map