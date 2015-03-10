'use strict';
define(['angular', '../utils/logger'], function (angular, Log) {
  return function about(stateProvider) {
    Log.getLogger().info('Config route: about');
    stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  };
});
