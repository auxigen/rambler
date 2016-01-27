(function () {
    'use strict';
    angular.module('ramblerApp', ['ngMaterial', 'ui.router'])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('orange');
        })
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/")
            $stateProvider
                .state('index', {
                    url: "/"
                })
                .state('explorer', {
                    url: "/explorer",
                    views: {
                        "content": { templateUrl: "views/device.results.html" },
                    }
                })
                .state('device.results', {
                    url: "/{id:[a-fA-F0-9]{12}}/results",
                    templateUrl: "views/device.results.html"
                })
            
        });
}());