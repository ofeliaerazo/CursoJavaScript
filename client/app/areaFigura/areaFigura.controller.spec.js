'use strict';

describe('Component: AreaFiguraComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var AreaFiguraComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AreaFiguraComponent = $componentController('AreaFiguraComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
