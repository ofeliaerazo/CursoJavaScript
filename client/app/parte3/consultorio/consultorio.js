'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('consultorio', {
        url: '/consultorio',
        template: '<consultorio></consultorio>'
      });
  });
