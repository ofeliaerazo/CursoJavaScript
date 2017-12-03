'use strict';
(function(){

class NaufragoComponent {
  constructor() {
  

  }
  totalPagar(){
    if(this.TI == 'SENCILLA'){
      this.PA = 2000;
    }
  else if(this.TI == 'DOBLE'){
    this.PA = 2500;
  }
  else {  this.PA = 2800;
  }

  if (this.TP=='TARJETA'){
    this.CA=this.TO*0.05
  }
  else{
    this.CA=0;
  }


  this.TO=this.PA*this.N;
  this.TOT=this.TO+this.CA;
  }
  }



angular.module('algoritmosApp')
  .component('naufrago', {
    templateUrl: 'app/naufrago/naufrago.html',
    controller: NaufragoComponent,
    controllerAs:'vm'
  });

})();
