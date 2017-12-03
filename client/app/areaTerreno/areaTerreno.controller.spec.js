'use strict';

describe('Component: AreaTerrenoComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var AreaTerrenoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AreaTerrenoComponent = $componentController('AreaTerrenoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
