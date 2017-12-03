'use strict';
(function(){

class DistanciaComponent {
  constructor() {

  }

  calcularDistancia(){

    this.X = this.X2 - this.X1;
    this.Y = this.Y2 - this.Y1;
    this.distancia = Math.sqrt(Math.pow(this.X,2)+Math.pow(this.Y,2));

  }
}

angular.module('algoritmosApp')
  .component('distancia', {
    templateUrl: 'app/distancia/distancia.html',
    controller: DistanciaComponent,
    controllerAs: 'vm'
  });

})();
