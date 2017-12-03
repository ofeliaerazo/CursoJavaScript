'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pantalones', {
        url: '/pantalones',
        template: '<pantalones></pantalones>'
      });
  });
