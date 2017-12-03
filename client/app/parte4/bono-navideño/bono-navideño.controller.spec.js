'use strict';

describe('Component: BonoNavideOComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var BonoNavideOComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BonoNavideOComponent = $componentController('BonoNavideOComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
