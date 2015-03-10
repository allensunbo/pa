define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name proteusApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the proteusApp
   */
  angular.module('proteusApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
