
module app {

    export const navBar = "appNavBar";

    class NavBarComponent implements ng.IComponentController {

        private buttons: IToolBarButton[];

        get navName() { return navBar; }

        static $inject = [
            inject.navbarService
        ];

        constructor(private navBarService: INavbarService) {}

        $onInit() {
            this.buttons = []
        }
        $onChanges(onChangesObj: ng.IOnChangesObject) {

        }

        close() {
            this.navBarService.close();
        }
        open() {
            this.navBarService.open();
        }

        //Buttons bindings
        buttonAction(button: IToolBarButton) {
            if (!button || !button.action) return;
            if (typeof button.action !== 'function') return;
            button.action();
        }
        buttonClass(button: IToolBarButton) {
            if (!button || !button.class) return;
            return button.class;
        }
        buttonLabel(button: IToolBarButton) {
            if (!button || !button.label) return;
            return button.label;
        }
        buttonIcon(button: IToolBarButton) {
            if (!button || !button.icon) return;
            return button.icon;
        }
        buttonText(button: IToolBarButton) {
            if (!button || !button.text) return;
            return button.text;
        }
        buttonShowCondition(button: IToolBarButton) {
            if (!button || !button.showCondition) return true;
            if (typeof button.showCondition === 'boolean') return button.showCondition;
            if (typeof button.showCondition === 'function') return button.showCondition();
            return false;
        }
    }

    const componentOptions: ng.IComponentOptions = {
        templateUrl: "app/navbar/navbar.component.html",
        controller: NavBarComponent,
        controllerAs: 'ctrl',
        bindings: {
        }
    }

    angular
        .module("app")
        .controller("NavBarComponent", NavBarComponent)
        .component("navbar", componentOptions);
}