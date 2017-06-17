angular.module('hiderDirective').service('lessonService', function($http) {
 this.getSchedule = function() {
    // $http.get('schedule.json');

    return $http({
      method: 'GET',
      url: 'schedule.json'
    })
 }

})
