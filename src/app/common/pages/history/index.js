import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HistoryComponent from './history.component';

const HistoryModule = angular
  .module('app.common.history', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('app.history', {
        url: '/history',
        component: 'history'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('history', HistoryComponent)
  .name;

export default HistoryModule;
