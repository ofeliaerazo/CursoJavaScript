'use strict';
(function(){

class CalificacionComponent {
  constructor() {
    this.message = 'Hello';
  }
  calificacionProporcionada(){
  	if (this.calificacion == 10) {
  		this.nota = 'A'
  	}
  	else if (this.calificacion == 9) {
  		this.nota = 'B'
  	}
  	else if (this.calificacion == 8) {
  		this.nota = 'C'
  	}
  	else if (this.calificacion == 6 && this.calificacion == 7) {
  		this.nota = 'D'
  	}
  	else if (this.calificacion <= 5 && this.calificacion >= 0) {
  		this.nota = 'F'
  	}
  }
}

angular.module('algoritmosApp')
  .component('calificacion', {
    templateUrl: 'app/parte4/3.14-calificacion/calificacion.html',
    controller: CalificacionComponent,
    controllerAs:'vm'
  });

})();
