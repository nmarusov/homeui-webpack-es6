import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SettingsComponent from './settings.component';

const SettingsModule = angular
  .module('app.common.settings', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('app.settings', {
        url: '/settings',
        component: 'settings'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('settings', SettingsComponent)
  .name;

export default SettingsModule;
