'use strict';

describe('Component: ConsultorioComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var ConsultorioComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ConsultorioComponent = $componentController('ConsultorioComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
