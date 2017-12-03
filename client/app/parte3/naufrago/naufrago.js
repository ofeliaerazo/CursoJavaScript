'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('naufrago', {
        url: '/naufrago',
        template: '<naufrago></naufrago>'
      });
  });
