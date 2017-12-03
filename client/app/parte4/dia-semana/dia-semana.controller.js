'use strict';
(function(){

class DiaSemanaComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('diaSemana', {
    templateUrl: 'app/parte4/dia-semana/dia-semana.html',
    controller: DiaSemanaComponent,
    controllerAs:'vm'
  });

})();
