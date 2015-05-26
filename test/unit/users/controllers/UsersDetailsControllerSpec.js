'use strict';

describe('UsersDetailsController', function () {

  var $state, $scope, $controller, UsersDetailsController, UsersServiceMock;

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('urlangular-app.users.controllers'));

  beforeEach(inject(function ($injector, _$controller_) {
    $controller = _$controller_;
    $scope = $injector.get('$rootScope').$new();
    $state = $injector.get('$state');
    UsersServiceMock = {
        API: {
          query: jasmine.createSpy(),
          get: jasmine.createSpy(),
          save: jasmine.createSpy(),
          delete: jasmine.createSpy(),
          remove: jasmine.createSpy()
        }
      };

    UsersDetailsController = $controller('UsersDetailsController', {
      $scope: $scope,
      $state: $state,
      'UsersService': UsersServiceMock
    });
  }));

  it('should have following as a part of its scope', function () {
    expect(UsersDetailsController).toBeDefined();
    expect(SeServiceMock.API.get).wasCalled();
    expect(UsersDetailsController.$scope.item).toBeDefined();
  });

});