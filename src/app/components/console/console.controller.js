class ConsoleCtrl {
  constructor () {
    'ngInject';
    this.name = 'console';
  }

  $onInit() {
    console.log("initializing console...");
  }
}

export default ConsoleCtrl;
