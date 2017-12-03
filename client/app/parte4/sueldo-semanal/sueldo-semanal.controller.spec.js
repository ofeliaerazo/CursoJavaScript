'use strict';

describe('Component: SueldoSemanalComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var SueldoSemanalComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    SueldoSemanalComponent = $componentController('SueldoSemanalComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
