'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cometa', {
        url: '/cometa',
        template: '<cometa></cometa>'
      });
  });
