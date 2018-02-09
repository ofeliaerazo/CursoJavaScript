'use strict';

describe('Component: TipoVacunaComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var TipoVacunaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TipoVacunaComponent = $componentController('TipoVacunaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
