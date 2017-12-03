'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('promedio', {
        url: '/promedio',
        template: '<promedio></promedio>'
      });
  });
