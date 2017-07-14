module app {
    "use strict";

    export interface ILoginService {
    }
    class LoginService implements ILoginService {

        static $inject = ["$q", "$http"];
        constructor(private $q: ng.IQService, private $http: ng.IHttpService) { }
    }
    angular
        .module("app")
        .service(inject.loginService, LoginService);
}
