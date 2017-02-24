import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ScriptsComponent from './scripts.component';

const ScriptsModule = angular
  .module('app.common.scripts', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('app.scripts', {
        url: '/scripts',
        component: 'scripts'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('scripts', ScriptsComponent)
  .name;

export default ScriptsModule;
