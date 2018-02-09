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
      if(this.antiguedad>2&&this.antiguedad<5){

        this.bonoAntiguedad=(this.sueldo*0.20)

      }else if(this.antiguedad>5){

          this.bonoAntiguedad=(this.sueldo*0.30)
          
          }

      if(this.sueldo<=1000){

          this.bonoSueldo=this.sueldo*0.25;

      }else if(this.sueldo>1000 && this.sueldo<=3500){

        this.bonoSueldo=(this.sueldo*0.15);

      }else if (this.sueldo>3500){
        this.bonoSueldo=(this.sueldo*0.10);
        
      }
      
      if(this.bonoAntiguedad>this.bonoSueldo){
          this.salario=this.bonoAntiguedad+this.sueldo;
        }
        else{
          this.salario=this.bonoSueldo+this.sueldo;
        }
      }

        }
      
         

     
  
angular.module('algoritmosApp')
  .component('bonos', {
    templateUrl: 'app/parte4/3.8-bonos/bonos.html',
    controller: BonosComponent,
    controllerAs:'vm'
  });

})();
