'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('areaTerreno', {
        url: '/areaTerreno',
        template: '<area-terreno></area-terreno>'
      });
  });
