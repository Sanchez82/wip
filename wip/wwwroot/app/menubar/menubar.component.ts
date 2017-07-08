module app
{
    class MenubarComponent implements ng.IComponentController {
    }

    const componentOptions: ng.IComponentOptions = {
        templateUrl: "app/menubar/menubar.component.html",
        controller: MenubarComponent,
        controllerAs: 'ctrl',
        bindings: {
        }
    }

    angular
        .module("app")
        .controller("MenubarComponent", MenubarComponent)
        .component("menuBar", componentOptions);
}