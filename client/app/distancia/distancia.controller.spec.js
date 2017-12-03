'use strict';

describe('Component: DistanciaComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var DistanciaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DistanciaComponent = $componentController('DistanciaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
