import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NavbarComponent from './navbar.component';

const NavbarModule = angular.
  module('app.common.components.navbar', [
    uiRouter
  ])
  .component('appNavbar', NavbarComponent)
  .name;

export default NavbarModule;
