'use strict';
define(['angular', '../utils/logger'], function (angular, Log) {
  return function (stateProvider) { //jshint ignore:line
    Log.getLogger().info('Config route: home');
    stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
  };
});
