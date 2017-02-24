class SettingsCtrl {
  constructor () {
    'ngInject';
    this.name = 'settings';
  }

  $onInit() {
    console.log("initializing", this.name);
  }
}

export default SettingsCtrl;
