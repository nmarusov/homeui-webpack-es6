class ScriptsCtrl {
  constructor () {
    'ngInject';
    this.name = 'scripts';
  }

  $onInit() {
    console.log("initializing", this.name);
  }
}

export default ScriptsCtrl;
