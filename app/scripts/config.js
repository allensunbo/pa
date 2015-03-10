define(['angular'], function(angular) {
  'use strict';
  return angular.module('proteusApp.config', [])
    .factory('ConfigService', function() {
      return {
        backend: {
          url: 'http://localhost:8080/api/'
        }
      };
    });
});
