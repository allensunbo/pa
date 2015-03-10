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
        'proteusApp.controllers.HomeCtrl',
        'proteusApp.controllers.AboutCtrl',
        'proteusApp.controllers.LoginCtrl',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngAnimate',
        'ngTouch'
      ])
      .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
          })
          .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
          .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      });
  });
