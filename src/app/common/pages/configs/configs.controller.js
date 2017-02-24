class ConfigsCtrl {
  constructor () {
    'ngInject';
    this.name = 'configs';
  }

  $onInit() {
    console.log("initializing", this.name);
  }
}

export default ConfigsCtrl;
