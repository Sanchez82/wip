module app {

    export interface INavbarService {
        setButtons(buttons: IToolBarButton[]);
        getButtons(): IToolBarButton[];
        open();
        close();
    }

    class NavbarService implements INavbarService {

        private activeButtons: IToolBarButton[];
        private searchFilters: IToolBarFilter;

        static $inject = [
            "$mdSidenav",
            "$mdComponentRegistry"
        ];

        constructor(private $mdSidenav: ng.material.ISidenavService, private $mdComponentRegistry: any) {}

        private init() {
            this.activeButtons = [
                {
                    action: () => { alert("first button actions") },
                    text: "Add Rule",
                    label: "New Rule",
                    class: "md-primary",
                    icon: ""
                }
            ];
        }
        setButtons(buttons: IToolBarButton[]) { }
        getButtons() { return this.activeButtons; }

        open() {
            this.$mdSidenav(navBar).open();
        }
        close() {
            this.$mdSidenav(navBar).close();
        }
    }

    angular
        .module("app")
        .service(inject.navbarService, NavbarService);

}