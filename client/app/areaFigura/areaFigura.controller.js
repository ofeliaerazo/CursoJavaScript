'use strict';
(function(){

class AreaFiguraComponent {
  constructor() {
    this.R;
    this.H;
    this.C;
    this.AT;
    this.AC;
    this.PI = 3.1416;
    this.Area;
  }
  areaF(){
  this.C=Math.sqrt( Math.pow(this.H,2) - Math.pow(this.R,2) );

    this.AT = (this.C*this.R);
    this.AC = this.PI * (Math.pow(this.R,2))/2;

    this.Area = this.AC + this.AT;

  }
}

angular.module('algoritmosApp')
  .component('areaFigura', {
    templateUrl: 'app/areaFigura/areaFigura.html',
    controller: AreaFiguraComponent,
    controllerAs: 'vm'
  });

})();
