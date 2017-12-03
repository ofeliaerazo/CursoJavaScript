'use strict';
(function(){

class BonosComponent {
  constructor() {
    this.bonoA = 0;
     this.bonoS = 0;
     this.bono =0;
     this.salario=0;


  }
    calcularBonos(){
      if(this.antiguedad>2&& this.antiguedad<5){

        this.bonoA=this.sueldo*0.20;

      }else if(this.antiguedad>5){

          this.bonoA=this.sueldo*0.30;
          this.sueldo=this.sueldo+this.bonoA;
        }

      else if(this.sueldo<1000){

          this.bonoS=this.sueldo*0.25;

      }else if(this.sueldo>1000 && this.sueldo<=3500){

        this.bonoS=this.sueldo*0.15;

      }else if (this.sueldo>3500){
        this.bonoS=this.sueldo*0.10;
        this.sueldo=this.sueldo+this.bonoS;


        }

      else if(this.bonoA>this.bonoS){
          this.bono=this.sueldo+this.bonoA;
        }
        else{
          this.bono=this.bonoB;
        }
        this.salario=this.bono+this.sueldo;
        }
  }


angular.module('algoritmosApp')
  .component('bonos', {
    templateUrl: 'app/parte4/bonos/bonos.html',
    controller: BonosComponent,
    controllerAs:'vm'
  });

})();
