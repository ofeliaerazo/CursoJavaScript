'use strict';

describe('Component: PaqueteDiciembreComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var PaqueteDiciembreComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PaqueteDiciembreComponent = $componentController('PaqueteDiciembreComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
