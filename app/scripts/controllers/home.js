define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name proteusApp.controller:HomeCtrl
   * @description
   * # MainCtrl
   * Controller of the proteusApp
   */
  angular.module('proteusApp.controllers.HomeCtrl', [])
    .controller('HomeCtrl', function ($scope, $rootScope) {
      $scope.content = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      $rootScope.activeLink = 'home';
    });
});
