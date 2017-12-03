'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bono-navideño', {
        url: '/bono-navideño',
        template: '<bono-navideno></bono-navideno>'
      });
  });
