'use strict';

describe('Component: SueldoComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var SueldoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    SueldoComponent = $componentController('SueldoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
