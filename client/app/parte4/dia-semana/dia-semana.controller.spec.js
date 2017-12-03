'use strict';

describe('Component: DiaSemanaComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var DiaSemanaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DiaSemanaComponent = $componentController('DiaSemanaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
