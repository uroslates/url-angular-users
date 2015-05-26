'use strict';

describe('UsersService', function () {

  var $httpBackend, UsersService;

  var items = [];

  beforeEach(angular.mock.module('ngResource'));
  beforeEach(angular.mock.module('urlangular-app.users.services'));

  beforeEach(inject(function ($injector, _UsersService_) {
    UsersService = _UsersService_;
    $httpBackend = $injector.get('$httpBackend');
    // $httpBackend.when('GET', '/auth.py').respond(items);
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should expose following interface', function () {
    expect(UsersService.API).toBeDefined();
  });

});