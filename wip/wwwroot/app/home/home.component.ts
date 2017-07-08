module app
{
    class HomeComponent implements ng.IComponentController {

        $onInit() {
            debugger;
            //Debugger33333
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