'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('areaCircuferencia', {
        url: '/areaCircuferencia',
        template: '<area-circuferencia></area-circuferencia>'
      });
  });
