'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'IntrocontrollerCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/contact',{
        templateUrl:'views/contact.html'
      })
      .when('/tech',{
        templateUrl:'views/tech.html',
        controller: 'TechcontrollerCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
