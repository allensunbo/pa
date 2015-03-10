'use strict';
define(['angular'], function (angular) {
  angular
    .module('proteusApp.route', [])
    .config(function ($stateProvider, $urlRouterProvider) {
      console.log('config');
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        });
    });
});
