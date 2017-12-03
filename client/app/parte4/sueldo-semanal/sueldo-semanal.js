'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sueldo-semanal', {
        url: '/sueldo-semanal',
        template: '<sueldo-semanal></sueldo-semanal>'
      });
  });
