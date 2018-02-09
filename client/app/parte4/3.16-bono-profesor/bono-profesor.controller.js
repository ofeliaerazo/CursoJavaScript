'use strict';
(function(){

class BonoProfesorComponent {
  constructor() {
    this.message = 'Hello';
  }
  montoBono(){
  	if (this.puntos>=0&&this.puntos<=100){
  		this.bono=this.salario
  	}
  	else if (this.puntos>=101&&this.puntos<=150){
  		this.bono=this.salario*2
  	}
  	else {
  		this.bono=this.salario*3
  	}
  	}
  }


angular.module('algoritmosApp')
  .component('bonoProfesor', {
    templateUrl: 'app/parte4/3.16-bono-profesor/bono-profesor.html',
    controller: BonoProfesorComponent,
    controllerAs:'vm'
  });

})();
