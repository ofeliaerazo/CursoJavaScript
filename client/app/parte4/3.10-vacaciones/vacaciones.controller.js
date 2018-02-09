'use strict';
(function(){

class VacacionesComponent{
  constructor(){
    this.message = 'Hello'
  }

  valorPasaje(){

        if(this.sitio=='Mexico'){
        this.kilometros=7500;
      	}
      	else if(this.sitio=='P.V.'){
        this.kilometros=800;
      	}
      	else if(this.sitio=='Acapulco'){
        this.kilometros=1200;
      	}
      	else if(this.sitio=='Cancun'){
        this.kilometros=1800;

      	}

      if(this.distancia=='ida'){
          this.pasaje=this.kilometros;
        }
      else{
        this.pasaje=this.kilometros*2;
      } 
      this.total=this.kilometros*this.pasaje;   

      
  } 

}

angular.module('algoritmosApp')
  .component('vacaciones', {
    templateUrl: 'app/parte4/3.10-vacaciones/vacaciones.html',
    controller: VacacionesComponent,
    controllerAs:'vm'
  });

})();
