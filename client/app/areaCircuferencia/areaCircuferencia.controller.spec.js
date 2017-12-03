'use strict';

describe('Component: AreaCircuferenciaComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var AreaCircuferenciaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AreaCircuferenciaComponent = $componentController('AreaCircuferenciaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
