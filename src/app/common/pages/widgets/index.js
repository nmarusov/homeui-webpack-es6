import angular from 'angular';
import uiRouter from 'angular-ui-router';
import WidgetsComponent from './widgets.component';

const WidgetsModule = angular
  .module('app.common.widgets', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('app.widgets', {
        url: '/widgets',
        component: 'widgets'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('widgets', WidgetsComponent)
  .name;

export default WidgetsModule;
