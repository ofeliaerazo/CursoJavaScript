'use strict';
(function(){

class SueldoSemanalComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('sueldoSemanal', {
    templateUrl: 'app/parte4/sueldo-semanal/sueldo-semanal.html',
    controller: SueldoSemanalComponent,
    controllerAs:'vm'
  });

})();
