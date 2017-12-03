'use strict';
(function(){

class SueldoComponent {
  constructor() {
    this.HT;
    this.PH;
    this.SS;
  }
  sueldo(){
    this.SS = this.PH*this.HT;
  }

}

angular.module('algoritmosApp')
  .component('sueldo', {
    templateUrl: 'app/sueldo/sueldo.html',
    controller: SueldoComponent,
    controllerAs: 'vm'
  });

})();
