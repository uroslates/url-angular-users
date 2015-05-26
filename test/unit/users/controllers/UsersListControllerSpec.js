'use strict';

describe('UsersListController', function () {

  var $state, $scope, $controller, UsersListController, UsersServiceMock;

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

    UsersListController = $controller('UsersListController', {
      $scope: $scope,
      $state: $state,
      'UsersService': UsersServiceMock
    });
  }));

  it('should have following as a part of its scope', function () {
    expect(UsersListController).toBeDefined();
    expect(SeServiceMock.API.query).wasCalled();
    expect(UsersListController.$scope.items).toBeDefined();
  });

});