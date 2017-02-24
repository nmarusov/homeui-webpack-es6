import angular from 'angular';
import ConsolePanelComponent from './panel.component';
import ConsoleComponent from './console.component';

const ConsoleModule = angular
  .module('app.components.console', [])
  .component('consolePanel', ConsolePanelComponent)
  .component('console', ConsoleComponent)
  .name;

export default ConsoleModule;
