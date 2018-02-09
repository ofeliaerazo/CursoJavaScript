'use strict';
(function(){

class SueldoSemanalComponent {
  constructor() {
    this.message = 'Hello';
  }

  pagoSemanal(){
  	if (this.horas<41){
  		this.horas=this.horas
  	}
  	else if (this.horas>=41&&this.horas<=45){
  		this.horas=this.horas*2
  	}
  	else if (this.horas>=46&&this.horas<=50){
  		this.horas=this.horas*3
  	}
  	else if(this.horas>50){
  		this.mensaje='No esta permitido'
  	} 
  	this.pago=this.horas*this.precio

}
}

angular.module('algoritmosApp')
  .component('sueldoSemanal', {
    templateUrl: 'app/parte4/3.12-sueldo-semanal/sueldo-semanal.html',
    controller: SueldoSemanalComponent,
    controllerAs:'vm'
  });

})();
