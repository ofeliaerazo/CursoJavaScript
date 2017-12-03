'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('areaFigura', {
        url: '/areaFigura',
        template: '<area-figura></area-figura>'
      });
  });
