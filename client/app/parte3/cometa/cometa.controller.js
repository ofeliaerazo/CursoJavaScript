'use strict';
(function(){

class CometaComponent {
  constructor() {
    this.message = 'Hello';
  }
  precioVenta(){

  if(this.C==3||this.C==4){
      this.MO=this.MP*0.75
}
else if(this.C==1||this.C==5){
  this.MO=this.MP*0.80
}
else{
  this.MO=this.MP*0.85
}
if(this.C==2||this.C==5){
  this.GF=this.MP+0.30
}
else if(this.C==3||this.C==6){
  this.GF=this.MP+0.35
}
else {
  this.GF=this.MP+0.28
}
this.CP=this.MP+this.MO+this.GF
this.PV=this.CP+this.CP*0.45

 }
}

angular.module('algoritmosApp')
  .component('cometa', {
    templateUrl: 'app/cometa/cometa.html',
    controller: CometaComponent,
    controllerAs:'vm'
  });

})();
