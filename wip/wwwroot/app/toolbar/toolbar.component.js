var app;
(function (app) {
    var ToolBarComponent = (function () {
        function ToolBarComponent(toolbarService) {
            this.toolbarService = toolbarService;
        }
        ToolBarComponent.prototype.$onInit = function () {
            debugger;
            this.buttons = [{
                    action: function () { return void {}; },
                    text: "Test button",
                    label: "Test button",
                    class: "md-primary",
                    icon: "board:add"
                }
            ];
        };
        ToolBarComponent.prototype.$onChanges = function (onChangesObj) {
        };
        //Buttons bindings
        ToolBarComponent.prototype.buttonAction = function (button) {
            debugger;
            if (!button || !button.action)
                return;
            if (typeof button.action !== 'function')
                return;
            button.action();
        };
        ToolBarComponent.prototype.buttonClass = function (button) {
            debugger;
            if (!button || !button.class)
                return;
            return button.class;
        };
        ToolBarComponent.prototype.buttonLabel = function (button) {
            debugger;
            if (!button || !button.label)
                return;
            return button.label;
        };
        ToolBarComponent.prototype.buttonIcon = function (button) {
            debugger;
            if (!button || !button.icon)
                return;
            return button.icon;
        };
        ToolBarComponent.prototype.buttonText = function (button) {
            debugger;
            if (!button || !button.text)
                return;
            return button.text;
        };
        ToolBarComponent.prototype.buttonShowCondition = function (button) {
            debugger;
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
            debugger;
            if (!this.filter || !this.filter.searchCondition)
                return;
            if (typeof this.filter.searchCondition !== 'function')
                return;
            this.filter.searchCondition(this.filterModel);
        };
        ToolBarComponent.prototype.filterShowCondition = function () {
            debugger;
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
    ToolBarComponent.$inject = [inject.toolbarService];
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