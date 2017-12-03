'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('banco', {
        url: '/banco',
        template: '<banco></banco>'
      });
  });
