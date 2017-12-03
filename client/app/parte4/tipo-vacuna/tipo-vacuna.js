'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tipo-vacuna', {
        url: '/tipo-vacuna',
        template: '<tipo-vacuna></tipo-vacuna>'
      });
  });
