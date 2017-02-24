import angular from 'angular';
import AlerterComponent from './alerter.component';

const AlerterModule = angular
  .module('app.components.alerter', [])
  .component('alerter', AlerterComponent)
  .name;

export default AlerterModule;
