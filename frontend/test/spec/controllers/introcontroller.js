'use strict';

describe('Controller: IntrocontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var IntrocontrollerCtrl, scope,factory,defered, httpBackend;
  
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$injector,infoFactory,$q,$httpBackend) {
		factory = infoFactory
		scope = $rootScope.$new();
		httpBackend = $httpBackend;

		defered = $q.defer()
		httpBackend.when('GET', 'views/main.html').respond('');


		spyOn(factory,'getIntro').and.returnValue(defered.promise);
		
		var respond = {
				data:{
					intro: '<p>Some text</p>'
				}
	 	};
		
		defered.resolve(respond);
	  scope.$apply();
		
		IntrocontrollerCtrl = $controller('IntrocontrollerCtrl', {
      $scope: scope,
			infoFactory:factory
    });

  }));

	it('has controller loaded',function(){
		expect(IntrocontrollerCtrl).toBeDefined();
	});
  
  it('getIntroMessage returns vaild html when factory works',function(){
	 //given
	 	var respond = {
				data:{
					intro: '<p>Some text</p>'
				}
	 	};
	  
	 //when
	  IntrocontrollerCtrl.getIntroMessage();
	  defered.resolve(respond);
	  scope.$apply();

	 //then
	  expect(scope.intro).toBe('<p>Some text</p>');
	  	
  });

  
});
