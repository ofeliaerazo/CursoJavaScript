'use strict';

angular.module('algoritmosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('areaRectangulo', {
        url: '/areaRectangulo',
        template: '<area-rectangulo></area-rectangulo>'
      });
  });
