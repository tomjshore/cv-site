'use strict';

describe('Controller: IntrocontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var IntrocontrollerCtrl, scope,$httpBackend,factory,defered;
  
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$injector,infoFactory,$q) {
		factory = infoFactory
		scope = $rootScope.$new();

		defered = $q.defer()

		spyOn(factory,'getIntro').and.returnValue(defered.promise);
		var respond = {
				intro: '<p>Some text</p>'
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
				intro: '<p>Some text</p>'
	 	};
	  
	 //when
	  IntrocontrollerCtrl.getIntroMessage();
	  defered.resolve(respond);
	  scope.$apply();

	 //then
	  expect(scope.intro).toBe('<p>Some text</p>');
	  	
  });

  
});
