'use strict';

describe('Controller: TechcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var TechcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_techService_) {
    scope = $rootScope.$new();
    TechcontrollerCtrl = $controller('TechcontrollerCtrl', {
      $scope: scope,
      techService:_techService_
    });
  }));

  it('should attach a list of tech to the scope', function () {
    expect(TechcontrollerCtrl.tech.length).not.toBe(0);
  });
});
