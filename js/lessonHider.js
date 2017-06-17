angular.module('hiderDirective').directive('lessonHider', function(){

  return {
      templateUrl: 'lessonHider.html',
      restrict: 'E',
      scope: {
          lesson: '='
      },
      controller: function($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule;
      },
      link: function(scope, element, attributes) {

        scope.getSchedule().then(function(response) {
          console.log(1111111, response)
          scope.schedule = response.data;

        scope.schedule.forEach(function(scheduleDay){
          if (scheduleDay.lesson === scope.lesson) {
            element.css('text-decoration', 'line-through');
            return;
           }
         });
        });
      }
  }
});
