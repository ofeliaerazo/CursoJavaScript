'use strict';

describe('Component: BonoProfesorComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var BonoProfesorComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BonoProfesorComponent = $componentController('BonoProfesorComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
