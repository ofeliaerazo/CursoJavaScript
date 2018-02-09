'use strict';
(function(){

class BancoComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoritmosApp')
  .component('banco', {
    templateUrl: 'app/parte4/3.21-banco/banco.html',
    controller: BancoComponent
  });

})();
