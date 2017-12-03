'use strict';

describe('Component: AreaRectanguloComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var AreaRectanguloComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AreaRectanguloComponent = $componentController('AreaRectanguloComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
