import angular from 'angular';
import uiRouter from 'angular-ui-router';
import DevicesComponent from './devices.component';

const DevicesModule = angular
  .module('app.common.devices', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('app.devices', {
        url: '/devices',
        component: 'devices'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('devices', DevicesComponent)
  .name;

export default DevicesModule;
