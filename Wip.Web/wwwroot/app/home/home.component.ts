module app
{
    class HomeComponent implements ng.IComponentController {

        private gettedFromServer = "";

        static $inject = [inject.homeService];
        constructor(private homeService: IHomeService) {}

        $onInit() {
            this.homeService.get().then((response) => {
                debugger;
                console.log(response);
                this.gettedFromServer = response;
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