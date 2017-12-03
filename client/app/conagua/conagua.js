'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('conagua', {
        url: '/conagua',
        template: '<conagua></conagua>'
      });
  });
