'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viajes', {
        url: '/viajes',
        template: '<viajes></viajes>'
      });
  });
