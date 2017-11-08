var app = angular.module('myApp', ['uiRouterTitle', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $urlRouterProvider.when('/', '/home');

        $stateProvider.state('home', {
            url: '/home',
            data: {
                pageTitle: 'Home'
            },
            templateUrl: './templates/home.html'
        })
            .state('installation', {
                url: '/installation',
                data: {
                    pageTitle: 'Installation'
                },
                templateUrl: './templates/installation.html'
            })

            .state('usage', {
                url: '/usage',
                data: {
                    pageTitle: 'Usage'
                },
                templateUrl: './templates/usage.html'
            });

    }
]);
