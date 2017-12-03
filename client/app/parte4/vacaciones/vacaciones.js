'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vacaciones', {
        url: '/vacaciones',
        template: '<vacaciones></vacaciones>'
      });
  });
