'use strict';

module.exports = function(config) {
  config.set({
    files : [
      'public/js/vendor/jquery/dist/jquery.js',
      'public/js/vendor/bootstrap/dist/js/bootstrap.js',
      'public/js/vendor/angular/angular.js',
      'public/js/vendor/angular-cookies/angular-cookies.js',
      'public/js/vendor/angular-resource/angular-resource.js',
      'public/js/vendor/angular-ui-router/release/angular-ui-router.js',
      'public/js/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      'public/js/vendor/angular-mocks/angular-mocks.js',
      'public/js/app/router.js',
      'public/js/app/utils/cors.js',
      'public/js/app/templates/templates.js',
      'public/js/app/settings.js',
      'public/js/app/users/services/index.js',
      'public/js/app/users/controllers/index.js',
      'public/js/app/users/directives/index.js',
      'public/js/app/users/providers/index.js',
      'public/js/app/users/constants/index.js',
      'public/js/app/users/index.js',
      'public/js/app/users/services/UsersService.js',
      'public/js/app/users/controllers/UsersListController.js',
      'public/js/app/users/controllers/UsersDetailsController.js',
      'public/js/bootstrap.js',
      'test/unit/**/*.js'
    ],
    basePath: '../',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: false,
    singleRun: true,
    colors: true
  });
};
