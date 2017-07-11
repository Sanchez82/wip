module app {
    "use strict";

    export interface IHomeService {
        get(): ng.IPromise<any>;
    }
    class HomeService implements IHomeService {

        static $inject = ["$q", "$http"];
        constructor(private $q: ng.IQService, private $http: ng.IHttpService) {}

        get(): ng.IPromise<any> {
            return this.$http.get(`api/Home/GetWelcome`).then(
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    return response.data;
                }
            );
        }
    }

    angular
        .module("app")
        .service(inject.homeService, HomeService);
}