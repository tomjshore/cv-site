'use strict';

describe('Service: menuService', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var menuService;
  beforeEach(inject(function (_menuService_) {
    menuService = _menuService_;
  }));

  it('should do something', function () {
    expect(!!menuService).toBe(true);
  });
  
  it('getMenu should return a Menu object with items',function(){
	  //given
	  //when
	  var menu = menuService.getMenu();
	  
	  //then
	  expect(menu.length).toBe(4);
	  
  });
  
  it('getMenu should return a Menu object with only one item active',function(){
	  //given
	  //when
	  var menu = menuService.getMenu();
	  
	  //then
	  var foundActive = false;
	  for(var i = 0; i < menu.length; i++){
		  var itm = menu[i];
		  if(foundActive){
			if(itm.active){
				foundActive = false;
				break;
			}  
		  }else{
			if(itm.active){
			  foundActive = true;
			}  
		  }
		  
		 
	  }
	  expect(foundActive).toBe(true);
	  
  });
  
  it('setActive changes the active to second index when passed in 1',function(){
	  //given
	  //when
	  menuService.setActive(1);
	  
	  //then
	  expect(menuService.getMenu()[0].active).toBe(false);
	  expect(menuService.getMenu()[1].active).toBe(true);
	  expect(menuService.getMenu()[2].active).toBe(false);
	  expect(menuService.getMenu()[3].active).toBe(false);
  });

});
