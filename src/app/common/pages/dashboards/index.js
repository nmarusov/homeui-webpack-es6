import angular from 'angular';
import uiRouter from 'angular-ui-router';
import DashboardsComponent from './dashboards.component';

const DashboardsModule = angular
  .module('app.common.dashboards', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('app.dashboards', {
        url: '/dashboards',
        component: 'dashboards'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('dashboards', DashboardsComponent)
  .name;

export default DashboardsModule;
