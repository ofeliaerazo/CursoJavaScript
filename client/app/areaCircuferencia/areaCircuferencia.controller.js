'use strict';
(function(){

class AreaCircuferenciaComponent {
  constructor() {
    this.radio;
    this.pi=3.14;
    this.area;
  }
  areaCircuferencia(){
    this.area=this.pi*(this.radio*this.radio);
}
}
angular.module('algoritmosApp')
  .component('areaCircuferencia', {
    templateUrl: 'app/areaCircuferencia/areaCircuferencia.html',
    controller: AreaCircuferenciaComponent,
    controllerAs: 'vm'
  });

})();
