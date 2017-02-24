import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeComponent from './home.component';

const HomeModule = angular
  .module('app.common.home', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('app.home', {
        url: '/',
        component: 'home'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('home', HomeComponent)
  .name;

export default HomeModule;
