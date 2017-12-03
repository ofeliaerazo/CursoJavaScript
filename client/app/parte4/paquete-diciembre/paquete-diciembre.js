'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('paquete-diciembre', {
        url: '/paquete-diciembre',
        template: '<paquete-diciembre></paquete-diciembre>'
      });
  });
