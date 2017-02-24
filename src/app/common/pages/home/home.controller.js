class HomeCtrl {
  constructor () {
    'ngInject';
    this.name = 'home';
  }

  $onInit() {
    console.log("initializing HomeCtrl...");
  }
}

export default HomeCtrl;
