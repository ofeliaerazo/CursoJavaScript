'use strict';
(function(){

class TipoVacunaComponent {
  constructor() {
    this.message = 'Hello';
  }
  tipoVacuna(){
  	if (this.edad>70&&(this.sexo=='M'||this.sexo=='F')){
  		this.vacuna='C'
  	}
  	else if ((this.edad>=16&&this.edad<=69)&&(this.sexo=='F')){
  		this.vacuna='B'
  	}
  	else if ((this.edad>=16&&this.edad<=69)&&(this.sexo=='M')){
  		this.vacuna='A'
  	}
  	else if ((this.edad<16)&&(this.sexo=='M'||this.sexo=='F')){
  		this.vacuna='A'
  	}
}
}
angular.module('algoritmosApp')
  .component('tipoVacuna', {
    templateUrl: 'app/parte4/3.19-tipo-vacuna/tipo-vacuna.html',
    controller: TipoVacunaComponent,
    controllerAs:'vm'
  });

})();
