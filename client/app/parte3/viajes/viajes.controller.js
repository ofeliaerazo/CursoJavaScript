'use strict';
(function(){

class ViajesComponent {
  constructor() {
    this.TI;
    this.KM;
    this.NP;
    this.CK;
    this.CP;
    this.TOTAL;

  }
  costoViaje(){
    if(this.TI == 'A'){
      this.CK = 2000;
    }
  else if(this.TI == 'B'){
    this.CK = 2500;
  }
  else {  this.CK = 3000;
  }

  if (this.NPR<20){
    this.NP=20
  }
  else{
    this.NP=this.NPR
  }

  this.TOTAL=this.NP*this.CK*this.KM;
  this.CP=this.TOTAL/this.NPR;
  }
}


angular.module('algoritmosApp')
  .component('viajes', {
    templateUrl: 'app/viajes/viajes.html',
    controller: ViajesComponent,
    controllerAs:'vm'
  });

})();
