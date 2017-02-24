import angular from 'angular';
import FooterComponent from './footer.component';

const FooterModule = angular.
  module('app.common.components.footer', [])
  .component('appFooter', FooterComponent)
  .name;

export default FooterModule;
