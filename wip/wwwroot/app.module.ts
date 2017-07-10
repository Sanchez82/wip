(() => {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ui.router',
        'ngMaterial'

        // Custom modules

        // 3rd Party Modules

    ]);

    app.config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

        var homeState = {
            name: 'home',
            url: '/home',
            templateUrl: "app/home/home.component.html",
            controller: "HomeComponent as ctrl"
        }

        $stateProvider.state(homeState);

        var loginState = {
            name: 'login',
            url: '/login',
            templateUrl: "app/login/login.component.html",
            controller: "LoginComponent as ctrl"
        }

        $urlRouterProvider.when("", "/home");
        $urlRouterProvider.otherwise("/home");
        $stateProvider.state(loginState);


    });

})();
