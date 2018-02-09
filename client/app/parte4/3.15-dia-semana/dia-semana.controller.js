'use strict';
(function(){

class DiaSemanaComponent {
  constructor() {
    this.message = 'Hello';
  }
  diaSemana(){
  	if (this.numero == 1) {
  		this.dia = 'LUNES'
  	}
  	else if (this.numero == 2) {
  		this.dia = 'MARTES'
  	}
  	else if (this.numero == 3) {
  		this.dia = 'MIERCOLES'
  	}
  	else if (this.numero == 4) {
  		this.dia = 'JUEVES'
  	}
  	else if (this.numero == 5) {
  		this.dia = 'VIERNES'
  	}
  	else if (this.numero == 6) {
  		this.dia = 'SABADO'
  	}
  	else if (this.numero == 7) {
  		this.dia = 'DOMINGO'
  	}
  	else {
  		this.dia = 'Este numero no pertenece a los dias de la semana'
  	}
  }
}

angular.module('algoritmosApp')
  .component('diaSemana', {
    templateUrl: 'app/parte4/3.15-dia-semana/dia-semana.html',
    controller: DiaSemanaComponent,
    controllerAs:'vm'
  });

})();
