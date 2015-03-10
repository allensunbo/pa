'use strict';
define(['angular'], function (angular) {
  return {
    getLogger: function getLogger() {
      var $log = angular.injector(['ng']).get('$log');
      return $log;
    }
  };
});
