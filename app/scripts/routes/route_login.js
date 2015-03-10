'use strict';
define(['angular', '../utils/logger'], function (angular, Log) {
  return function login(stateProvider) {
    Log.getLogger().info('Config route: login');
    stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });
  };
});
