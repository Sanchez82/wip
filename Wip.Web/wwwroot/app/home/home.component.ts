module app {
    class HomeComponent implements ng.IComponentController {

        private gettedFromServer = "";
        private registedUser = "";

        static $inject = [inject.homeService];
        constructor(private homeService: IHomeService) { }

        $onInit() {
            this.homeService.getWelcome().then((response) => {
                debugger;
                console.log(response);
                this.gettedFromServer = response;
            });

            this.homeService.getAllUsers().then((response) => {
                debugger;
                if (response) {
                    console.log(response.length > 0);
                    this.registedUser = response[0].name;
                }
            });

        }
    }

    const componentOptions: ng.IComponentOptions = {
        templateUrl: "app/home/home.component.html",
        controller: HomeComponent,
        controllerAs: 'ctrl',
        bindings: {
        }
    }

    angular
        .module("app")
        .controller("HomeComponent", HomeComponent)
        .component("home", componentOptions);
}