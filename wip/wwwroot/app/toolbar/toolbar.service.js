var app;
(function (app) {
    var ToolbarService = (function () {
        function ToolbarService() {
        }
        ToolbarService.prototype.init = function () {
            this.activeButtons = [];
        };
        ToolbarService.prototype.setButtons = function (buttons) { };
        ToolbarService.prototype.getButtons = function () { return this.activeButtons; };
        ToolbarService.prototype.setFilter = function (filter) { this.searchFilters = filter; };
        ToolbarService.prototype.getFilter = function () { return this.searchFilters; };
        return ToolbarService;
    }());
    ToolbarService.$inject = [];
    angular
        .module("app")
        .service(inject.toolbarService, ToolbarService);
})(app || (app = {}));
//# sourceMappingURL=toolbar.service.js.map