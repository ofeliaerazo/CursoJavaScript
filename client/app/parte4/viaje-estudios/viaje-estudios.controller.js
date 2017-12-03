'use strict';
(function(){

class ViajeEstudiosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('viajeEstudios', {
    templateUrl: 'app/parte4/viaje-estudios/viaje-estudios.html',
    controller: ViajeEstudiosComponent,
    controllerAs:'vm'
  });

})();
