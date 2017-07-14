module app {
    "use strict";

    export interface IHomeService {
        getWelcome(): ng.IPromise<any>;
        getAllUsers(): ng.IPromise<any[]>;
    }
    class HomeService implements IHomeService {

        static $inject = ["$q", "$http"];
        constructor(private $q: ng.IQService, private $http: ng.IHttpService) {}

        getWelcome(): ng.IPromise<any> {
            return this.$http.get(`api/Home/GetWelcome`).then(
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    debugger;
                    return response.data;
                }
            );
        }
        getAllUsers(): ng.IPromise<any[]> {
            return this.$http.get(`api/Home/GetAllUsers`).then(
                (response: ng.IHttpPromiseCallbackArg<any[]>) => {
                    return response.data;
                }
            );
        }
    }

    angular
        .module("app")
        .service(inject.homeService, HomeService);
}