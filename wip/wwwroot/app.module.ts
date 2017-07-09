(() => {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ui.router',
        'ngMaterial'

        // Custom modules

        // 3rd Party Modules

    ]);

    app.config(($stateProvider) => {

        var helloState = {
            name: 'home',
            url: '/home',
            templateUrl: "app/home/home.component.html",
            controller: "HomeComponent as ctrl"
        }

        $stateProvider.state(helloState);

        var loginState = {
            name: 'login',
            url: '/login',
            templateUrl: "app/login/login.component.html",
            controller: "LoginComponent as ctrl"
        }

        $stateProvider.state(loginState);


    });

})();
