'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bonos-tienda', {
        url: '/bonos-tienda',
        template: '<bonos-tienda></bonos-tienda>'
      });
  });
