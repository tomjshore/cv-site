"use strict";angular.module("frontendApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"IntrocontrollerCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html"}).when("/contact",{templateUrl:"views/contact.html"}).when("/tech",{templateUrl:"views/tech.html",controller:"TechcontrollerCtrl",controllerAs:"ctrl"}).otherwise({redirectTo:"/"})}]),angular.module("frontendApp").factory("infoFactory",["$http",function(a){return{getIntro:function(){return a.get("intro.json")}}}]),angular.module("frontendApp").controller("IntrocontrollerCtrl",["infoFactory","$scope",function(a,b){var c={getIntroMessage:function(){a.getIntro().then(function(a){b.intro=a.data.intro},function(a){b.intro="<p>No intro</p>"})},init:function(){this.getIntroMessage()}};return c.init(),c}]);var menuService;angular.module("frontendApp").service("menuService",function(){return menuService});var menu=[{active:!0},{active:!1},{active:!1},{active:!1}];menuService={getMenu:function(){return menu},setActive:function(a){angular.forEach(menu,function(a){a.active=!1}),menu[a].active=!0}},angular.module("frontendApp").controller("MenuController",["menuService",function(a){this.activeCSS=function(b){return a.getMenu()[b].active?"active":""},this.changeMenuItem=function(b){a.setActive(b)}}]),angular.module("frontendApp").service("techService",function(){return{getTech:function(){return[{name:"Grunt",imgUrl:"images/grunt.9dd06c30.png",description:"Helps run tasks on my JavaScript like build, test, ect...",url:"http://gruntjs.com"},{name:"Spring",imgUrl:"images/spring.711e0ab8.png",description:"Depenancy injection for Java back end. I use spring MVC for all the REST requests.",url:"https://spring.io"},{name:"Openshift",imgUrl:"images/openshift.61f701b2.png",description:"A redhat based cloud I use for hosting the website, it also helps with the CI build ",url:"https://www.openshift.com/"},{name:"Yeoman",imgUrl:"images/yeoman.add75e4d.png",description:"A scaffolding tool that help builing html 5 apps, I'm using a angular genarator",url:"http://yeoman.io/"},{name:"Node JS",imgUrl:"images/node.a014246d.png",description:"I use node when developing to preview my website and run Java Script unit tests",url:"https://nodejs.org/"},{name:"Angular",imgUrl:"images/angular.ac7158b0.png",description:"JavaSciprt library that helps with singal page applications and depenancy injection",url:"https://angular.io/"}]}}}),angular.module("frontendApp").controller("TechcontrollerCtrl",["techService",function(a){this.tech=a.getTech()}]),angular.module("frontendApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="alert alert-info alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> For more detailed information <a class="btn btn-success" href="cv.pdf">Download My CV <span class="glyphicon glyphicon-floppy-save"></span></a> </div> <h3>Current Role</h3> <h4>BBC</h4> <p>I have just started at the BBC.</p> <h3>Previous Roles</h3> <h4>Morgan Stanley</h4> <p>I\'m currently working for Morgan Stanley as a consultant on behalf of First Derivatives. My role is to automate testing efforts on several trading platforms.</p> <p>This is done by making Python scripts that emulate engine behaviours, send fix messages to services and parsing their responses. </p> <strong>Achievements</strong> <p>So far in this role I have convinced the team to make automated tests at the same time as they are developing new features to their code base.</p> <p>Also I have design and made tests for treading with the London Metal Exchange(LME), these tests have found defects which have been fixed in the earlier stages of the software life cycle.</p> <h4>HSBC</h4> <p>Working a HSBC as the tech lead for a major ECM (Enterprise Content Management) project which FileNet as the backend.</p> <p>I was in charge of making solutions to problems posed by users. Once the solution has been designed I shared with the rest of my development team and ensure that they produce the best quality of code.</p> <strong>Achievements</strong> <p>During my time at HSBC I have rolled out a new frontend and better workflow on how the users upload documents to FileNet.</p> <p>I have guided my team to be more agile and now we are delivering a couple of changes a month, instead of a couple of changes per year.</p> <p>Trained up a number of graduates on my team with there core Java skills and other technologies we use.</p> <h4>FDM</h4> <p>As a consultant at FDM I worked with Perform Group where I supported a number sports websites.</p> <p>On top of this I helped made <a href="http://www.pdc.tv">PDC</a> and <a href="http://www.matchroompool.com/">Matchroom Pool</a> which at the time was the first responsive website made by Perform.</p>'),a.put("views/contact.html",'<ul class="list-group"> <li class="list-group-item"> <span class="glyphicon glyphicon-earphone"></span> Phone: 07425 160384 </li> <li class="list-group-item"> <span class="glyphicon glyphicon-envelope"></span> Email: <a href="mailto:tomjshore@hotmail.co.uk">tomjshore@hotmail.co.uk</a> </li> <li class="list-group-item"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn: <a href="https://uk.linkedin.com/in/tom-shore-78025285">My Profile</a> </li> </ul>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Welcome</h1> <p class="lead"> <img src="images/tom.bd2c18ad.jpg" alt="tomjshore face" class="img-circle"><br> I\'m Tom J Shore </p> <p><a class="btn btn-lg btn-success" href="cv.pdf">Download My CV <span class="glyphicon glyphicon-floppy-save"></span></a></p> </div> <div class="row marketing"> <div ng-bind-html="intro"> </div> </div>'),a.put("views/tech.html",'<div class="row"> <div class="col-sm-6 col-md-4" ng-repeat="techItem in ctrl.tech"> <div class="thumbnail"> <a ng-href="{{techItem.url}}"> <img ng-src="{{techItem.imgUrl}}" alt="{{techItem.name}}"> </a> <div class="caption"> <h3>{{techItem.name}}</h3> <p>{{techItem.description}}</p> <p><a ng-href="{{techItem.url}}" class="btn btn-link" role="button">Website</a></p> </div> </div> </div> </div>')}]);