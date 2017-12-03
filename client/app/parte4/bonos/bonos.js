'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bonos', {
        url: '/bonos',
        template: '<bonos></bonos>'
      });
  });
