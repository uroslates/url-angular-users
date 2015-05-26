'use strict';

angular.module('urlangular-app.users.controllers')
  .controller('UsersDetailsController', ['$scope', '$modalInstance', 'user', 'UsersServiceLocal',
    function ($scope, $modalInstance, user, UsersServiceLocal) {

        $scope.user = user;

        $scope.save = function (user) {
          UsersServiceLocal.saveOrUpdate(user).then(function () {
            $modalInstance.close(user);
          });
        };


        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };

    }
  ]);
