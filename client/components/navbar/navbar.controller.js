'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'distancia',
    'state': 'distancia'
  },{
    'title': 'sueldo',
    'state': 'sueldo'
  },{
    'title': 'telefonica',
    'state': 'telefonica'
  },{
    'title': 'viajes',
    'state': 'viajes'
  },
  {
    'title': 'naufrago-hamburgesa',
    'state': 'naufrago'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('algoritmosApp')
  .controller('NavbarController', NavbarController);
