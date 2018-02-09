'use strict';

describe('Component: BonosComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var BonosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BonosComponent = $componentController('BonosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
