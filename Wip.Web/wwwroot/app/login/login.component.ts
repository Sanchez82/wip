module app {
    class LoginComponent implements ng.IComponentController {

        private username: string;
        private password: string;

        constructor() { }

        $onInit() {


        }


        private login() {
            debugger;

            if (this.username && this.password) {
                alert("Adesso e solo adesso faccio la chiamata al server. Dove il server mi ritorna il access token.");
                return;
            }
            alert("Devi scrivere sia la username che password!!! ");


        }

    }

    const componentOptions: ng.IComponentOptions = {
        templateUrl: "app/login/login.component.html",
        controller: LoginComponent,
        controllerAs: 'ctrl',
        bindings: {
        }
    }



    angular
        .module("app")
        .controller("LoginComponent", LoginComponent)
        .component("login", componentOptions);
}