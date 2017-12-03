'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sueldo', {
        url: '/sueldo',
        template: '<sueldo></sueldo>'
      });
  });
