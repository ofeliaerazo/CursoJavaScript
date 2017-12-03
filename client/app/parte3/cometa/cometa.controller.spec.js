'use strict';

describe('Component: CometaComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var CometaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CometaComponent = $componentController('CometaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
