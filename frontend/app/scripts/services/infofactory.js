'use strict';

/**
 * @ngdoc service
 * @name frontendApp.infoFactory
 * @description
 * # infoFactory
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('infoFactory', function ($http) {
    

    // Public API here
    return {
      getIntro: function(){
    	  return $http.get('intro.json');
      }
    };
  });
