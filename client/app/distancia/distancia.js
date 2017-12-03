'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('distancia', {
        url: '/distancia',
        template: '<distancia></distancia>'
      });
  });
