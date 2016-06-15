'use strict';

describe('Controller: IntrocontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var IntrocontrollerCtrl, scope,$httpBackend;

  
  
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$injector) {
	
	  
	scope = $rootScope.$new();
    
	$httpBackend = $injector.get('$httpBackend');
	
    IntrocontrollerCtrl = $controller('IntrocontrollerCtrl', {
      $scope: scope
    });
  }));
  
  it('getIntroMessage returns vaild html when factory works',function(){
	 //given
	 var respond = {
		 intro: '<p>Some text</p>'
	 }
	 $httpBackend.when('GET', 'intro.json').respond(respond);
	  $httpBackend.when('GET', 'views/main.html').respond({});
	  $httpBackend.expectGET('intro.json');
	  $httpBackend.expectGET('views/main.html'); 
	  
	 //when
	  IntrocontrollerCtrl.getIntroMessage();
	  $httpBackend.flush();
	  
	 //then
	  expect(scope.intro).toBe('<p>Some text</p>');
	  	
  });

  
});
