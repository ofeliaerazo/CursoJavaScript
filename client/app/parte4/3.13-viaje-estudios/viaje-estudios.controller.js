'use strict';
(function(){

class ViajeEstudiosComponent {
  constructor() {
    this.message = 'Hello';
  }
  costoPasaje(){
  	if (this.personas>100){
  		this.costo=20000
  	}
  	else if(this.personas>=50&&this.personas<=100){
  		this.costo=35000
  }
  else if(this.personas>=20&&this.personas<=49){
  		this.costo=40000
  }
  else if(this.personas<20){
  		this.costo=70000
  }
  this.tarifa=this.costo/this.personas
}
}
angular.module('algoritmosApp')
  .component('viajeEstudios', {
    templateUrl: 'app/parte4/3.13-viaje-estudios/viaje-estudios.html',
    controller: ViajeEstudiosComponent,
    controllerAs:'vm'
  });

})();
