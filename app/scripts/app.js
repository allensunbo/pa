/*jshint unused: vars */
define(['angular', 'controllers/home', 'controllers/about', 'controllers/login'],
  function (angular, HomeCtrl, AboutCtrl, LoginCtrl) {
    'use strict';

    /**
     * @ngdoc overview
     * @name proteusApp
     * @description
     * # proteusApp
     *
     * Main module of the application.
     */
    return angular
      .module('proteusApp', [
        'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'ngTouch',
        'ui.router',
        'proteusApp.controllers.HomeCtrl',
        'proteusApp.controllers.AboutCtrl',
        'proteusApp.controllers.LoginCtrl'
      ])
      .config(function ($stateProvider, $urlRouterProvider) {

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
