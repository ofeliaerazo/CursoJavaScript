'use strict';
(function(){

class PantalonesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('pantalones', {
    templateUrl: 'app/parte4/pantalones/pantalones.html',
    controller: PantalonesComponent,
    controllerAs:'vm'
  });

})();
