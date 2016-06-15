'use strict';

/**
 * @ngdoc service
 * @name frontendApp.techService
 * @description
 * # techService
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('techService', function () {
    return {
      getTech:function () {
        return [{
          name: 'Grunt',
          imgUrl : 'images/grunt.png',
          description:'Helps run tasks on my JavaScript like build, test, ect...',
          url:'http://gruntjs.com'
        },{
          name: 'Spring',
          imgUrl : 'images/spring.png',
          description:'Depenancy injection for Java back end. I use spring MVC for all the REST requests.',
          url:'https://spring.io'
        },{
          name: 'Openshift',
          imgUrl : 'images/openshift.png',
          description:'A redhat based cloud I use for hosting the website, it also helps with the CI build ',
          url:'https://www.openshift.com/'
        },{
          name: 'Yeoman',
          imgUrl : 'images/yeoman.png',
          description:'A scaffolding tool that help builing html 5 apps, I\'m using a angular genarator',
          url:'http://yeoman.io/'
        },{
          name: 'Node JS',
          imgUrl : 'images/node.png',
          description:'I use node when developing to preview my website and run Java Script unit tests',
          url:'https://nodejs.org/'
        },{
          name: 'Angular',
          imgUrl : 'images/angular.png',
          description:'JavaSciprt library that helps with singal page applications and depenancy injection',
          url:'https://angular.io/'
        }
        ];
      }
    };
  });
