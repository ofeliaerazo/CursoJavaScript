'use strict';
(function(){

class BonosTiendaComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('bonosTienda', {
    templateUrl: 'app/parte4/bonos-tienda/bonos-tienda.html',
    controller: BonosTiendaComponent,
    controllerAs:'vm'
  });

})();
