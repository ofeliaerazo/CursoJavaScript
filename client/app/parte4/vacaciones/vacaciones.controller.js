'use strict';
(function(){

class VacacionesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('vacaciones', {
    templateUrl: 'app/parte4/vacaciones/vacaciones.html',
    controller: VacacionesComponent,
    controllerAs:'vm'
  });

})();
