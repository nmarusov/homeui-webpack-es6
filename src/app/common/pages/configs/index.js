import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ConfigsComponent from './configs.component';

const ConfigsModule = angular
  .module('app.common.configs', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('app.configs', {
        url: '/configs',
        component: 'configs'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('configs', ConfigsComponent)
  .name;

export default ConfigsModule;
