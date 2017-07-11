module app.config {
    "use strict";

    ///Edited config

    const appConfig = angular.module("app.config", ["app"]);

    class ConfigThemes {
        static $inject = ["$mdThemingProvider"];

        constructor($mdThemingProvider: ng.material.IThemingProvider) {
            $mdThemingProvider.alwaysWatchTheme(false);

            const customPrimary = {
                '50': "#a4ccea",
                '100': "#8fc1e6",
                '200': "#7ab5e1",
                '300': "#66a9dc",
                '400': "#519ed8",
                '500': "#3c92d3",
                '600': "#2d86c8",
                '700': "#2978b3",
                '800': "#246a9f",
                '900': "#1f5c8a",
                'A100': "#b9d8ef",
                'A200': "#cee3f4",
                'A400': "#e2eff9",
                'A700': "#1a4e75"
            };
            $mdThemingProvider.definePalette("customPrimary", customPrimary);

            const customAccent = {
                '50': "#fbcf9a",
                '100': "#fbc381",
                '200': "#fab769",
                '300': "#f9ab50",
                '400': "#f8a038",
                '500': "#f7941f",
                '600': "#f48809",
                '700': "#db7a08",
                '800': "#c26d07",
                '900': "#aa5f06",
                'A100': "#fcdbb3",
                'A200': "#fde6cb",
                'A400': "#fef2e4",
                'A700': "#915105"
            };
            $mdThemingProvider.definePalette("customAccent", customAccent);

            const customWarn = {
                '50': "#f6b5af",
                '100': "#f3a098",
                '200': "#f08b81",
                '300': "#ed766b",
                '400': "#eb6154",
                '500': "#e84c3d",
                '600': "#e53726",
                '700': "#d82a1a",
                '800': "#c22617",
                '900': "#ab2114",
                'A100': "#f8cac6",
                'A200': "#fbdfdd",
                'A400': "#fef4f3",
                'A700': "#941d12"
            };
            $mdThemingProvider.definePalette("customWarn", customWarn);

            var customBackground = {
                '50': '#ffffff',
                '100': '#ffffff',
                '200': '#ffffff',
                '300': '#ffffff',
                '400': '#ffffff',
                '500': '#ffffff',
                '600': '#f2f2f2',
                '700': '#e6e6e6',
                '800': '#d9d9d9',
                '900': '#cccccc',
                'A100': '#ffffff',
                'A200': '#ffffff',
                'A400': '#ffffff',
                'A700': '#bfbfbf'
            };
            $mdThemingProvider.definePalette("customBackground", customBackground);

            $mdThemingProvider.theme("default")
                .primaryPalette("customPrimary")
                .accentPalette("customAccent")
                .warnPalette("customWarn");
            //.backgroundPalette("customBackground");



            // $mdThemingProvider.definePalette("warnToastPrimaryPalette", $mdThemingProvider.extendPalette("red", { "500": "3c92d3" }));

            $mdThemingProvider.setDefaultTheme("default");
        }
    }
    appConfig.config(ConfigThemes);

    class ConfigIcons {
        static $inject = ["$mdIconProvider"];

        constructor($mdIconProvider: ng.material.IIconProvider) {
            $mdIconProvider
                .iconSet("blur", "app/img/icons/ic_blur_circular_24px.svg", 24)
                .defaultIconSet("app/img/icons/ic_blur_circular_24px.svg", 24);
        }
    }
    appConfig.config(ConfigIcons);

    class ConfigHttp {
        static $inject = ["$httpProvider"];
        constructor($httpProvider: ng.IHttpProvider) {
            // Configure $http service to combine processing of multiple http responses received at around the same time via $rootScope.$applyAsync.
            // This can result in significant performance improvement for bigger applications that make many HTTP requests concurrently (common during application bootstrap).
            $httpProvider.useApplyAsync(true);

            //$httpProvider.interceptors.push(Injectables.authInterceptor);
            //$httpProvider.interceptors.push(Injectables.errorInterceptor);

            //  Disable Cache in IE
            $httpProvider.defaults.headers.common["If-Modified-Since"] = "0";
        }
    }
    appConfig.config(ConfigHttp);
    
}