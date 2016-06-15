'use strict';

describe('Service: techService', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var techService;
  beforeEach(inject(function (_techService_) {
    techService = _techService_;
  }));

  it('should do something', function () {
    expect(!!techService).toBe(true);
  });
  
  it('test getTech should return an array of tech',function(){
    
    var result = techService.getTech();
    
    expect(result.length).not.toBe(0);
    expect(result[0].imgUrl).not.toBeUndefined();
    expect(result[0].name).not.toBeUndefined();
    expect(result[0].description).not.toBeUndefined();
    expect(result[0].url).not.toBeUndefined();
  });

});
