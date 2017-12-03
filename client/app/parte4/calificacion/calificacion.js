'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calificacion', {
        url: '/calificacion',
        template: '<calificacion></calificacion>'
      });
  });
