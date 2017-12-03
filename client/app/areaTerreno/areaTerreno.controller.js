'use strict';
(function(){

class AreaTerrenoComponent {
  constructor() {
    this.B;
    this.A;
    this.C;
    this.AT;
    this.AR;
    this.area;

  }
  areaT(){
    this.AT = (this.B * (this.A-this.C)/2);
    this.AR = this.B * this.A;
    this.area = this.AT + this.AR;

  }
}

angular.module('algoritmosApp')
  .component('areaTerreno', {
    templateUrl: 'app/areaTerreno/areaTerreno.html',
    controller: AreaTerrenoComponent,
    controllerAs: 'vm'
  });

})();
