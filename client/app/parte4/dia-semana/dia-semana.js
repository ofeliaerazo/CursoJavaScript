'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dia-semana', {
        url: '/dia-semana',
        template: '<dia-semana></dia-semana>'
      });
  });
