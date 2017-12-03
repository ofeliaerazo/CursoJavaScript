'use strict';

describe('Component: BonosTiendaComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var BonosTiendaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BonosTiendaComponent = $componentController('BonosTiendaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
