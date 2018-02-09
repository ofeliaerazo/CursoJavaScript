'use strict';

describe('Component: PantalonesComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var PantalonesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PantalonesComponent = $componentController('PantalonesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
