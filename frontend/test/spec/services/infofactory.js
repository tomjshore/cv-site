'use strict';

describe('Service: infoFactory', function () {
	
	var $httpBackend, createFactory;

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var infoFactory;
  beforeEach(inject(function ($injector) {
	$httpBackend = $injector.get('$httpBackend');
	
	createFactory = function(){
		return $injector.get('infoFactory',{});
	}
    
  }));

  it('should do something', function () {
	  infoFactory = createFactory();
	  expect(!!infoFactory).toBe(true);
  });
  
  it('getIntro should call the rest service and return some text',function(){
	  infoFactory = createFactory();
	  
	  $httpBackend.when('GET', 'intro.json').respond('<p>Some text</p>');
	  $httpBackend.when('GET', 'views/main.html').respond({});
	  $httpBackend.expectGET('intro.json');
	  $httpBackend.expectGET('views/main.html');
	  var html;
	  infoFactory.getIntro().then(function(data){html = data.data},function(error){html = "error"});
	  
	  $httpBackend.flush();
	  
	  expect(html).toBe('<p>Some text</p>');
	  
  });

});
