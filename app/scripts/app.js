/*jshint unused: vars */
define(['angular', 'controllers/home', 'controllers/about'],
  function (angular, HomeCtrl, AboutCtrl) {
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
      .module('proteusApp', ['proteusApp.controllers.HomeCtrl',
        'proteusApp.controllers.AboutCtrl',
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
          .otherwise({
            redirectTo: '/'
          });
      });
  });
