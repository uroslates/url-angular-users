'use strict';

window.app = angular.module('url.app', [
        'urlangular-app.users',
        'ui.router',
        'ui.bootstrap',
        'templates-main'
    ])

    //Setting up routes
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {

            // States definition
            $stateProvider.state('base', {
                    abstract: true,
                    views: {
                        'navigation@': {
                            templateUrl: 'public/js/app/templates/navigation.html'
                        },
                        'header@': {
                            templateUrl: 'public/js/app/templates/header.html'
                        },
                        'footer@': {
                            templateUrl: 'public/js/app/templates/footer.html'
                        }
                    }
                });
            $stateProvider.state('base.home', {
                    url: '/',
                    views: {
                        'body@': {
                            templateUrl: 'public/js/app/home/templates/body.html'
                        }
                    }
                });

            $stateProvider.state('base.users-list', {
                url: '/users',
                views: {
                        'body@': {
                            controller: 'UsersListController',
                            templateUrl: 'public/js/app/users/templates/list.html'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');
            $locationProvider.hashPrefix('!');
        }
    ])

    .run(['CORSProvider',
        function (CORSProvider) {
            CORSProvider.enableCORS();
        }
    ]);
