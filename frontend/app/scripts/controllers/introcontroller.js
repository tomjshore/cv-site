'use strict';


/**
 * @ngdoc function
 * @name frontendApp.controller:IntrocontrollerCtrl
 * @description
 * # IntrocontrollerCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('IntrocontrollerCtrl', function (infoFactory,$scope) {
	  var contrObject= {
			  getIntroMessage: function(){
				  
				  infoFactory.getIntro().success(function(data){
					 console.log('here');
					 console.log(data);
					 $scope.intro = data.intro;
				  }).error(function(){
					  $scope.intro = '<p>No intro</p>';
				  });

			  },
			  init: function(){
				this.getIntroMessage();
			  }
			  
			  
	  };
	  
	  contrObject.init();
	  return contrObject;
	  
  });

