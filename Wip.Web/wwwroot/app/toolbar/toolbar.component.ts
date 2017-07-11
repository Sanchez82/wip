
module app {

    export interface IToolBarFilter {
        label: string;
        searchCondition: (filter: string) => void;
        class?: string;
        showCondition?: any;
        icon?: string;
        disabled?: string;
    }

    export interface IToolBarButton {
        text: string;
        label: string;
        class?: string;
        action: any;
        showCondition?: any;
        icon?: string;
        disabled?: string;
    }

    class ToolBarComponent implements ng.IComponentController {

        private buttons: IToolBarButton[];
        private filter: IToolBarFilter;
        private filterModel: string;

        static $inject = [inject.toolbarService, inject.navbarService, "$mdDialog"];
        constructor(private toolbarService: IToolbarService, private navbar: INavbarService, private $mdDialog: ng.material.IDialogService) { }

        $onInit() {


            this.buttons = [{
                action: () => { this.openDialog(); },
                text: "",
                label: "MainButton",
                class: "md-primary", 
                icon: "img/icons/menu.svg"
            },
            ]
        }

        $onChanges(onChangesObj: ng.IOnChangesObject) {

        }

        public openDialog() {
            this.$mdDialog.show(
                this.$mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Wip Message')
                    .textContent('Working on it!!!!')
                    .ariaLabel('WorkinP')
                    .ok('OK!'));
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

        //filter Bindings
        filterSearch() {
            if (!this.filter || !this.filter.searchCondition) return;
            if (typeof this.filter.searchCondition !== 'function') return;
            this.filter.searchCondition(this.filterModel);
        }
        filterShowCondition() {
            if (!this.filter) return false;
            if (this.filter.showCondition && typeof this.filter.showCondition === 'boolean') return this.filter.showCondition;
            if (this.filter.showCondition && typeof this.filter.showCondition === 'function') return this.filter.showCondition();
            return true;
        }


    }

    const componentOptions: ng.IComponentOptions = {
        templateUrl: "app/toolbar/toolbar.component.html",
        controller: ToolBarComponent,
        controllerAs: 'ctrl',
        bindings: {
        }
    }

    angular
        .module("app")
        .controller("ToolBarComponent", ToolBarComponent)
        .component("toolbar", componentOptions);
}