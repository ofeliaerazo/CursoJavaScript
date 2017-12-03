'use strict';
(function(){

class TipoVacunaComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('tipoVacuna', {
    templateUrl: 'app/parte4/tipo-vacuna/tipo-vacuna.html',
    controller: TipoVacunaComponent,
    controllerAs:'vm'
  });

})();
