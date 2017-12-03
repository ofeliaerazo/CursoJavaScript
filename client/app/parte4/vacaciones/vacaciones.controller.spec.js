'use strict';

describe('Component: VacacionesComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var VacacionesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VacacionesComponent = $componentController('VacacionesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
