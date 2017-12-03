'use strict';
(function(){

class PolizasComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('polizas', {
    templateUrl: 'app/parte4/polizas/polizas.html',
    controller: PolizasComponent,
    controllerAs:'vm'
  });

})();
