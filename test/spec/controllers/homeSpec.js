/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: HomeCtrl', function () {

    // load the controller's module
    beforeEach(module('proteusApp.controllers.HomeCtrl'));
    console.log('HomeCtrl loaded');

    var HomeCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      HomeCtrl = $controller('HomeCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.content.length).toBe(3);
    });
  });
});
