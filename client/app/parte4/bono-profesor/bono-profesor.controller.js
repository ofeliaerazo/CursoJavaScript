'use strict';
(function(){

class BonoProfesorComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('bonoProfesor', {
    templateUrl: 'app/parte4/bono-profesor/bono-profesor.html',
    controller: BonoProfesorComponent,
    controllerAs:'vm'
  });

})();
