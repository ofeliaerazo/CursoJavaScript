'use strict';
(function(){

class BonoNavideOComponent {
  constructor() {
    this.message = 'Hello';
  }
  bonoNavideno(){
  	if ((this.antiguedad>=4) || (this.sueldo <= 2000)) {
  		this.porcentaje = (this.sueldo*0.25)

  	}else {
  		this.porcentaje = (this.sueldo*0.20)
  	}
    this.sueldoF=this.sueldo+this.porcentaje
  }

}

angular.module('algoritmosApp')
  .component('bonoNavideño', {
    templateUrl:'app/parte4/3.18-bono-navideño/bono-navideño.html',
    controller: BonoNavideOComponent,
    controllerAs:'vm'
  });

})();
