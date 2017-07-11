module app {

    export interface IToolbarService {
        setButtons(buttons: IToolBarButton[]);
        getButtons(): IToolBarButton[];
        setFilter(filter: IToolBarFilter);
        getFilter(): IToolBarFilter;
    }

    class ToolbarService implements IToolbarService {

        private activeButtons: IToolBarButton[];
        private searchFilters: IToolBarFilter;

        static $inject = [];
        constructor() { }

        private init() {
            this.activeButtons = [];
        }
        setButtons(buttons: IToolBarButton[]) { }
        getButtons() { return this.activeButtons; }
        setFilter(filter: IToolBarFilter) { this.searchFilters = filter; }
        getFilter() { return this.searchFilters; }
    }

    angular
        .module("app")
        .service(inject.toolbarService, ToolbarService);

}