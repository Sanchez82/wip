var app;
(function (app) {
    var ToolBarComponent = (function () {
        function ToolBarComponent(toolbarService, navbar, $mdDialog) {
            this.toolbarService = toolbarService;
            this.navbar = navbar;
            this.$mdDialog = $mdDialog;
        }
        ToolBarComponent.prototype.$onInit = function () {
            var _this = this;
            this.buttons = [{
                    action: function () { _this.openDialog(); },
                    text: "",
                    label: "MainButton",
                    class: "md-primary",
                    icon: "img/icons/menu.svg"
                },
            ];
        };
        ToolBarComponent.prototype.$onChanges = function (onChangesObj) {
        };
        ToolBarComponent.prototype.openDialog = function () {
            this.$mdDialog.show(this.$mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Wip Message')
                .textContent('Working on it!!!!')
                .ariaLabel('WorkinP')
                .ok('OK!'));
        };
        //Buttons bindings
        ToolBarComponent.prototype.buttonAction = function (button) {
            if (!button || !button.action)
                return;
            if (typeof button.action !== 'function')
                return;
            button.action();
        };
        ToolBarComponent.prototype.buttonClass = function (button) {
            if (!button || !button.class)
                return;
            return button.class;
        };
        ToolBarComponent.prototype.buttonLabel = function (button) {
            if (!button || !button.label)
                return;
            return button.label;
        };
        ToolBarComponent.prototype.buttonIcon = function (button) {
            if (!button || !button.icon)
                return;
            return button.icon;
        };
        ToolBarComponent.prototype.buttonText = function (button) {
            if (!button || !button.text)
                return;
            return button.text;
        };
        ToolBarComponent.prototype.buttonShowCondition = function (button) {
            if (!button || !button.showCondition)
                return true;
            if (typeof button.showCondition === 'boolean')
                return button.showCondition;
            if (typeof button.showCondition === 'function')
                return button.showCondition();
            return false;
        };
        //filter Bindings
        ToolBarComponent.prototype.filterSearch = function () {
            if (!this.filter || !this.filter.searchCondition)
                return;
            if (typeof this.filter.searchCondition !== 'function')
                return;
            this.filter.searchCondition(this.filterModel);
        };
        ToolBarComponent.prototype.filterShowCondition = function () {
            if (!this.filter)
                return false;
            if (this.filter.showCondition && typeof this.filter.showCondition === 'boolean')
                return this.filter.showCondition;
            if (this.filter.showCondition && typeof this.filter.showCondition === 'function')
                return this.filter.showCondition();
            return true;
        };
        return ToolBarComponent;
    }());
    ToolBarComponent.$inject = [inject.toolbarService, inject.navbarService, "$mdDialog"];
    var componentOptions = {
        templateUrl: "app/toolbar/toolbar.component.html",
        controller: ToolBarComponent,
        controllerAs: 'ctrl',
        bindings: {}
    };
    angular
        .module("app")
        .controller("ToolBarComponent", ToolBarComponent)
        .component("toolbar", componentOptions);
})(app || (app = {}));
//# sourceMappingURL=toolbar.component.js.map