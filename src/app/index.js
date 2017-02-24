import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import CommonModule from './common/';
import ComponentsModule from './components/';
import AppComponent from './app.component';
import AppRun from './app.run';
import AppConstants from './app.constants';
import AppConfig from './app.config';

const requires = [
  uiRouter,
  CommonModule, ,
  ComponentsModule
];

angular
  .module('app', requires)
  .constant('AppConstants', AppConstants)
  .config(AppConfig)
  .component('app', AppComponent)
  .run(AppRun);
