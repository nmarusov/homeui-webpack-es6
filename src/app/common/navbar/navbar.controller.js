class NavbarCtrl {
  constructor () {
    'ngInject';
    this.name = 'navbar';
  }
  
  $onInit() {
    console.log("initializing NavbarController...");
  }

  $onDestroy() {
    console.log("destroying NavbarController...");
  }
}

export default NavbarCtrl;
