'use strict';
(function(){

class BonoNavideOComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('bonoNavideño', {
    templateUrl: 'app/parte4/bono-navideño/bono-navideño.html',
    controller: BonoNavideOComponent,
    controllerAs:'vm'
  });

})();
