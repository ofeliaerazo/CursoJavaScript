'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viaje-estudios', {
        url: '/viaje-estudios',
        template: '<viaje-estudios></viaje-estudios>'
      });
  });
