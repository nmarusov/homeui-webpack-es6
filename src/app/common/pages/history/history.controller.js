class HistoryCtrl {
  constructor () {
    'ngInject';
    this.name = 'history';
  }

  $onInit() {
    console.log("initializing", this.name);
  }
}

export default HistoryCtrl;
