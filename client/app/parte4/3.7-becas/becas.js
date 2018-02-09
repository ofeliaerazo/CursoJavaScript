'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('becas', {
        url: '/becas',
        template: '<becas></becas>'
      });
  });
