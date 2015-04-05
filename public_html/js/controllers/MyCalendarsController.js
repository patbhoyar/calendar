myApp.controller('MyCalendarsController', function($scope, firebaseService){
    $(document).find('.cp').colorpicker();
    $scope.calendarColor = '#000';
    
   $scope.saveNewCalendar = function(){
       var x = {
            'name'  :   $scope.calendarName,
            'icon'  :   $scope.calendarIcon,
            'color' :   $scope.calendarColor
        };
       $scope.myCalendars = firebaseService.addCalendar(x);
   }
});