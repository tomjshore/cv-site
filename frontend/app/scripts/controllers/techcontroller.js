'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:TechcontrollerCtrl
 * @description
 * # TechcontrollerCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('TechcontrollerCtrl', function (techService) {
    this.tech = techService.getTech();
  });
