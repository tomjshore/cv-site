'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MenuController
 * @description
 * # MenuController
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MenuController', function (menuService) {
    this.activeCSS = function(index){
		if(menuService.getMenu()[index].active){
			return 'active';
		}
		return '';
	};
	this.changeMenuItem = function(index){
		menuService.setActive(index);
	};
  });
