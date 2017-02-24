function AppConfig($logProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    .state('app', {
      abstract: true,
      component: 'app',
      redirect: 'app.home'
    });

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;
