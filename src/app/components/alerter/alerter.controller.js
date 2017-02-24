class AlerterCtrl {
  constructor () {
    'ngInject';
    this.name = 'alerter';
  }

  $onInit() {
    console.log("initializing", this.name);
  }
}

export default AlerterCtrl;
