'use strict';

describe('Component: TelefonicaComponent', function () {

  // load the controller's module
  beforeEach(module('algoritmosApp'));

  var TelefonicaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TelefonicaComponent = $componentController('TelefonicaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
