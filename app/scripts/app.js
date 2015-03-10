/*jshint unused: vars */
define(['angular', 'routes', 'controllers/home', 'controllers/about', 'controllers/login'],
  function (angular, routes, HomeCtrl, AboutCtrl, LoginCtrl) {
    'use strict';

    /**
     * @ngdoc overview
     * @name proteusApp
     * @description
     * # proteusApp
     *
     * Main module of the application.
     */
    var app = angular
      .module('proteusApp', [
        'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'ngTouch',
        'ui.router',
        'proteusApp.routes',
        'proteusApp.controllers.HomeCtrl',
        'proteusApp.controllers.AboutCtrl',
        'proteusApp.controllers.LoginCtrl'

      ]);

    app.config(function () {
    });

    app.run(function () {

    });

    return app;
  });
