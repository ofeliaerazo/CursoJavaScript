'use strict';

describe('Component: ViajesComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var ViajesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ViajesComponent = $componentController('ViajesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
