define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name proteusApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the proteusApp
   */
  angular.module('proteusApp.controllers.LoginCtrl', [])
    .controller('LoginCtrl', function($scope, $rootScope, $http, $log) {
      $scope.content = 'login';
      $rootScope.activeLink = 'login';

      $http.get($rootScope.backend.url)
        .success(function(data) {
          $log.info(data);
        });

    });
});
