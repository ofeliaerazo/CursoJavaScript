'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('polizas', {
        url: '/polizas',
        template: '<polizas></polizas>'
      });
  });
