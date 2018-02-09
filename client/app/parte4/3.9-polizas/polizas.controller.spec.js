'use strict';

describe('Component: PolizasComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var PolizasComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PolizasComponent = $componentController('PolizasComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
