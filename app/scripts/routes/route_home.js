'use strict';
define(['angular', '../utils/logger'], function(angular, Log) {
    return function(stateProvider) {
        Log.getLogger().info('Config route: home');
        stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            });
    };
});
