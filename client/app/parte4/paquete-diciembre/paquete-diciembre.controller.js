'use strict';
(function(){

class PaqueteDiciembreComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('paqueteDiciembre', {
    templateUrl: 'app/parte4/paquete-diciembre/paquete-diciembre.html',
    controller: PaqueteDiciembreComponent,
    controllerAs:'vm'
  });

})();
