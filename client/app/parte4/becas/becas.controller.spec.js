'use strict';

describe('Component: BecasComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var BecasComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BecasComponent = $componentController('BecasComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
