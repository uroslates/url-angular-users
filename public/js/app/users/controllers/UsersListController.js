'use strict';

angular.module('urlangular-app.users.controllers')
  .controller('UsersListController', ['$scope', '$state', '$modal', 'UsersServiceLocal',
    function ($scope, $state, $modal, UsersService) {

        $scope.query = function (params) {
          return UsersService.query(params).then(function (response) {
            $scope.items = response;
          });
        };

        $scope.toggleSearch = function() {
          $scope.searchOn = !$scope.searchOn;
        };

        $scope.userEditModal = function(user) {
          var modalInstance = $modal.open({
            templateUrl: 'public/js/app/users/templates/user-modal.html',
            controller: 'UsersDetailsController',
            resolve: { user: function () { return user; } }
          });

          modalInstance.result.then(function() {
            $scope.query();
          });
        };

        $scope.deleteUser = function (userId) {
          if (window.confirm('Are you sure you want to delete this user?')) {
            UsersService.delete(userId).then(function () {
                $scope.query();
              });
          }
        };

        $scope.search = {};
        $scope.items = $scope.query();
    }
  ]);
