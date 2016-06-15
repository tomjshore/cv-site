'use strict';

/**
 * @ngdoc service
 * @name frontendApp.menuService
 * @description
 * # menuService
 * Service in the frontendApp.
 */
{
	var menuService;
	angular.module('frontendApp').service('menuService', function () {
		return menuService;	
	});
	var menu =[
			{active:true},
			{active:false},
			{active:false},
			{active:false}
		];
	menuService = {
			getMenu : function(){
				return menu;
			},
			setActive : function(index){
				angular.forEach(menu,function(item){
					item.active = false;
				});
				menu[index].active = true;
			}
	};
}