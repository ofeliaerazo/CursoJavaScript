'use strict';
(function(){

class PolizasComponent {
  constructor() {
    this.message = 'Hello';
  }

  costoPoliza(){
      if(this.poliza=='A'){
        this.poliza=1200
      	}
      	else if(this.poliza=='B'){
      	this.poliza=950
      	}

      if(this.alcoholico== true){
          this.alcoholico=(this.poliza*0.1);
        }
      else{
        this.alcoholico=0;
      }


      if(this.lentes==true){
          this.lentes=(this.poliza*0.05)
          }
      else{
        this.lentes=0;
      }

      if(this.enfermedad==true){
          this.enfermedad=(this.poliza*0.05)
          }
      else{
        this.enfermedad=0;
      }   
                
      if(this.edad>40){
          this.recargoEdad=this.poliza+(this.poliza*0.2);
        }
        else{
          this.recargoEdad=this.poliza+(this.poliza*0.1);
        }
        this.recargo=this.alcoholico+this.lentes+this.enfermedad;
        this.pagoPoliza=this.poliza + this.recargo + this.recargoEdad;
       
      }

     }    
angular.module('algoritmosApp')
  .component('polizas', {
    templateUrl: 'app/parte4/3.9-polizas/polizas.html',
    controller: PolizasComponent,
    controllerAs:'vm'
  });

})();
