'use strict';
(function(){

class CalificacionComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('calificacion', {
    templateUrl: 'app/parte4/calificacion/calificacion.html',
    controller: CalificacionComponent,
    controllerAs:'vm'
  });

})();
