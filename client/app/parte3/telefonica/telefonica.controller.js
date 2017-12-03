'use strict';
(function(){

class TelefonicaComponent {
  constructor() {
    this.TI;
    this.DI;
    this.TU;
    this.IM;
    this.TOT;
    this.PAG;
  }

calcularPagoLlamada(){
  if(this.TI<=5){
    this.PAG=this.TI*100
  }else if(this.TI<=8){
      this.PAG=((this.TI-5)*80)+500
  }else if (this.TI<=10){
      this.PAG=((this.TI-8)*70)+740
    }else if(this.TI>10){
        this.PAG=((this.TI-10)*50)+880
    }

    if(this.DI=='DOMINGO'){
        this.IM=this.PAG*0.05
      }else if (this.TU=='MATUTINO') {
          this.IM=this.PAG*0.15
      }else {
        this.IM=this.PAG*0.10
      }

   this.TOT=this.IM+this.PAG;
}
}

angular.module('algoritmosApp')
  .component('telefonica', {
    templateUrl: 'app/telefonica/telefonica.html',
    controller: TelefonicaComponent,
    controllerAs:'vm'
    });

})();
