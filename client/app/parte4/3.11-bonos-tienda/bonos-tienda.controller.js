'use strict';
(function(){

class BonosTiendaComponent {
  constructor() {
    this.message = 'Hello';
  }
  bonoAntiguedad(){
    	if(this.antiguedad==1){
  		this.bono=100;
  	}
  	else if(this.antiguedad==2){
  		this.bono=200;
  	}
  	else if(this.antiguedad==3){
  		this.bono=300;
  	}
  	else if(this.antiguedad==4){
  		this.bono=400;
  	}
  	else if(this.antiguedad==5){
  		this.bono=500;
  	}
  	else if(this.antiguedad>5){
  		this.bono=1000;
  	}
  	

  }
}

angular.module('algoritmosApp')
  .component('bonosTienda', {
    templateUrl: 'app/parte4/3.11-bonos-tienda/bonos-tienda.html',
    controller: BonosTiendaComponent,
    controllerAs:'vm'
  });

})();
