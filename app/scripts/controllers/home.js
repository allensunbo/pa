define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name proteusApp.controller:HomeCtrl
   * @description
   * # MainCtrl
   * Controller of the proteusApp
   */
  var app = angular.module('proteusApp.controllers.HomeCtrl', [])//jshint ignore:line
    .controller('HomeCtrl', function ($scope, $rootScope) {
      $scope.content = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      $rootScope.activeLink = 'home';
    });
});
