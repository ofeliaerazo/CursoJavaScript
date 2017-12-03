'use strict';
(function(){

class AreaRectanguloComponent {
  constructor() {
    this.base;
    this.altura;
    this.area;
  }
  areaRectangulo(){
    this.area=this.base*this.altura;
  }
}

angular.module('algoritmosApp')
  .component('areaRectangulo', {
    templateUrl: 'app/areaRectangulo/areaRectangulo.html',
    controller: AreaRectanguloComponent,
    controllerAs: 'vm'
  });

})();
