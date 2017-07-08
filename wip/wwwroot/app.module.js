(function () {
    'use strict';
    var app = angular.module('app', [
        // Angular modules 
        'ui.router',
        'ngMaterial'
        // Custom modules
        // 3rd Party Modules
    ]);
    //angular.bootstrap(document, ['app']);
    app.config(function ($stateProvider) {
        var helloState = {
            name: 'home',
            url: '/home',
            templateUrl: "app/home/home.component.html",
            controller: "HomeComponent as ctrl"
        };
        $stateProvider.state(helloState);
    });
})();
//# sourceMappingURL=app.module.js.map