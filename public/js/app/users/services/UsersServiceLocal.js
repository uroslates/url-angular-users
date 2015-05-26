'use strict';

angular.module('urlangular-app.users.services')
  .factory('UsersServiceLocal', ['$q', 'usersConstant', function ($q, usersConstant) {

      var users = usersConstant.response;

      var UsersServiceLocal = {

        query: function () {
          return $q.when(users);
        },

        get: function (userId) {
          return users.find(function (user) {
            return user.id === userId;
          });
        },

        saveOrUpdate(user) {
          if (!user.id) {
            return this.save(user);
          } else {
            return this.update(user);
          }
        },

        save: function (user) {
          user.id = new Date().getTime();
          return $q.when(users.push(user));
        },

        update: function (user) {
          for (var i = 0; i < users.length; i++) {
            if (user.id === users[i].id) {
              users[i] = user;
            }
          }
          return $q.when(user);
        },

        delete: function (userId) {
          users = users.filter(function removeUser(user) { return user.id !== userId; });
          return $q.when(userId);
        }

      };

      return UsersServiceLocal;

    }
  ]);
