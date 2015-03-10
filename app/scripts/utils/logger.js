'use strict';
// we use utils when we don't need or cannot register angular services
define(['angular'], function(angular) {
  var $log;
  return {
    getLogger: function getLogger() {
      // do not create multiple instance
      if (!$log) {
        // console.log('new $log created');
        $log = angular.injector(['ng']).get('$log');
      }
      return $log;
    }
  };
});
