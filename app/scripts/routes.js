'use strict';
define(['angular'], function (angular) {
  var app = angular.module('proteusApp.routes', []);

  var _$stateProvider;

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    _$stateProvider = $stateProvider;
  });

  app.config(home)
    .config(about)
    .config(login);

  function home() { //jshint ignore:line
    getLogger().info('Config route: home');
    _$stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
  }

  function about() { //jshint ignore:line
    getLogger().info('Config route: about');
    _$stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  }

  function login() { //jshint ignore:line
    getLogger().info('Config route: login');
    _$stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });
  }

  function getLogger() {
    var $log = angular.injector(['ng']).get('$log');
    return $log;
  }
});
