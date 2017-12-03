'use strict';

describe('Component: NaufragoComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var NaufragoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    NaufragoComponent = $componentController('NaufragoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
