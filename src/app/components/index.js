import angular from 'angular';
import ConsoleModule from './console/';
import AlerterModule from './alerter/';

const ComponentsModule = angular
  .module('app.components', [
    ConsoleModule,
    AlerterModule
  ])
  .name;

export default ComponentsModule;
