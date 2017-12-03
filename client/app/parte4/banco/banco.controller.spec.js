'use strict';

describe('Component: BancoComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var BancoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BancoComponent = $componentController('BancoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
