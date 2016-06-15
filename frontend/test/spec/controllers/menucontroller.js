'use strict';

describe('Controller: MenucontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var controller,scope, menuService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$injector) {
    scope = $rootScope.$new();
	menuService = $injector.get('menuService');
    controller = $controller('MenuController', {
      $scope: scope,
	  menuService : menuService
      
    });
  }));

  it('activeCSS returns active when passed 0 and the first item in the menu is active',function(){
		//given
		//when
		var result = controller.activeCSS(0);
		//then
		expect(result).toBe('active');
  });
  
  it('activeCSS returns an empty string when passed 0 and second item in the menu is active',function(){
		//given
		menuService.setActive(1);
		//when
		var result = controller.activeCSS(0);
		//then
		expect(result).toBe('');
		
  });
  
  it('changeMenuItem changes the active index',function(){
		//given
		menuService.setActive(0);
		//when
		controller.changeMenuItem(3);
		var result = menuService.getMenu()[3].active;
		//then
		expect(result).toBe(true);		
  });
});
