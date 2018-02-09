'use strict';

describe('Component: CalificacionComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var CalificacionComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CalificacionComponent = $componentController('CalificacionComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
