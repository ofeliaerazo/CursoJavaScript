'use strict';
(function(){

class PaqueteDiciembreComponent {
  constructor() {
    this.message = 'Hello';
   	this.paquete = { 'A':	
              '1: tELEVISOR',
							'1: MODULAR',
							'3: PARES DE ZAPATOS',
							'5: CAMISAS',
							'5: PANTALONES'
				,
          'B':"'1: GRABADORA',
          '3: PARES DE ZAPATOS',
          '5: CAMISAS',
          '5: PANTALONES'"
          
        }SS
        
				
			}

  }
  montoBono(){
  	if (this.monto>50){
  		this.paquete='A'
  	}
  	else if (this.monto<50&&this.monto>=20){
  		this.paquete='B'
  	}
  }

}

angular.module('algoritmosApp')
  .component('paqueteDiciembre', {
    templateUrl: 'app/parte4/3.17-paquete-diciembre/paquete-diciembre.html',
    controller: PaqueteDiciembreComponent,
    controllerAs:'vm'
  });

})();
