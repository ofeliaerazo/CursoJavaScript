'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bono-profesor', {
        url: '/bono-profesor',
        template: '<bono-profesor></bono-profesor>'
      });
  });
