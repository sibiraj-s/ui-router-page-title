const app = angular.module('app', ['uiRouterTitle', 'ui.router']);

const stateConfig = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/home');

  $urlRouterProvider.when('/', '/home');

  $stateProvider
    .state('home', {
      url: '/home',
      data: {
        pageTitle: 'Home',
      },
      templateUrl: './templates/home.html',
    })
    .state('installation', {
      url: '/installation',
      data: {
        pageTitle: 'Installation',
      },
      templateUrl: './templates/installation.html',
    })
    .state('usage', {
      url: '/usage',
      data: {
        pageTitle: 'Usage',
      },
      templateUrl: './templates/usage.html',
    });
};

stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

app.config(stateConfig);
