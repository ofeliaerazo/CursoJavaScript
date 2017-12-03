'use strict';

describe('Component: ConaguaComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var ConaguaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ConaguaComponent = $componentController('ConaguaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
