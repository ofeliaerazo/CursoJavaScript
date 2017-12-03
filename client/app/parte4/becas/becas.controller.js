'use strict';
(function(){

class BecasComponent {
  constructor() {
    this.message = 'Hello';

  }
  estudianteBecados(){
    if(this.edad>18){
      if(this.promedio>=9){

      this.beca=2000;

      }else if(this.promedio>=7.5){

      this.beca=1000;

      }else if(this.promedio<7.5 && this.promedio>=6){

      this.beca=500;

      }

      else if(this.promedio<6){
      this.beca=0
      this.mensaje='Estudia mas'

    }
  }else if(this.edad<=18){
      if(this.promedio>=9){
      this.beca=3000;
      }
      else if(this.promedio<9&&this.promedio>=8){
      this.beca=2000;
      }
      else if(this.promedio<8 && this.promedio>=6){
      this.beca=1000;
      }
      else if(this.promedio<6){
      this.beca=0
      this.mensaje='Enviar mensaje'

      }
    }
  }
}
angular.module('algoritmosApp')
  .component('becas', {
    templateUrl: 'app/parte4/becas/becas.html',
    controller: BecasComponent,
    controllerAs:'vm'
  });

})();
