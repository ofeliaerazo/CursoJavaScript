'use strict';
(function(){

class ConsultorioComponent {
  constructor() {
    this.message = 'Hello';
  }
  totalTratamiento(){
    if(this.NC <=3){
      this.CC = 200;
      this.TOT=this.CC*this.NC;
    }
  else if(this.NC<=5){
    this.CC = 150;
    this.TOT=(this.NC-3)*150+600;
  }
  else if(this.NC<=8){
    this.CC = 100;
    this.TOT=(this.NC-5)*100+900;
  }
  else {
    this.CC = 50;
    this.TOT=(this.NC-8)*50+1200;
  }

  }

}

angular.module('algoritmosApp')
  .component('consultorio', {
    templateUrl: 'app/consultorio/consultorio.html',
    controller: ConsultorioComponent,
    controllerAs:'vm'
  });

})();
