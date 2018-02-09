'use strict';

describe('Component: ViajeEstudiosComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var ViajeEstudiosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ViajeEstudiosComponent = $componentController('ViajeEstudiosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
