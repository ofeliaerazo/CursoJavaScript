'use strict';

describe('Component: PromedioComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var PromedioComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PromedioComponent = $componentController('PromedioComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
