'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('telefonica', {
        url: '/telefonica',
        template: '<telefonica></telefonica>'
      });
  });
