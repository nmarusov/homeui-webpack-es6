class DashboardsCtrl {
  constructor () {
    'ngInject';
    this.name = 'dashboards';
  }

  $onInit() {
    console.log("Initializing DashboardsCtrl...");
  }

  $onEnter() {
    console.log("enter app.dashboards");      
  }
}

export default DashboardsCtrl;
