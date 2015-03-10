'use strict';
// to add a new route, add route_abc under "routes" folder
// and also add dependency below
define(['angular', 'routes/route_home', 'routes/route_about', 'routes/route_login'],
  function(angular, home, about, login) {
    var app = angular.module('proteusApp.routes', []);
    app.config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
      }) // entry point to add routes
      .config(function($stateProvider) {
        home($stateProvider);
      })
      .config(function($stateProvider) {
        about($stateProvider);
      })
      .config(function($stateProvider) {
        login($stateProvider);
      });

  });
