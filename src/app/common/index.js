import angular from 'angular';

// Layout
import NavbarModule from './navbar/';
import FooterModule from './footer';

// Pages
import HomeModule from './pages/home/';
import DashboardsModule from './pages/dashboards/';
import DevicesModule from './pages/devices/';
import WidgetsModule from './pages/widgets/';
import HistoryModule from './pages/history/';
import ScriptsModule from './pages/scripts/';
import ConfigsModule from './pages/configs/';
import SettingsModule from './pages/settings/';

const CommonModule = angular
  .module('app.common', [
    NavbarModule,
    FooterModule,
    HomeModule,
    DashboardsModule,
    DevicesModule,
    WidgetsModule,
    HistoryModule,
    ScriptsModule,
    ConfigsModule,
    SettingsModule
  ])
  .name;

export default CommonModule;
