myApp
.controller('CalendarController',['$scope', 'dateFactory', 'monthsAndDays', function($scope, dateFactory, monthsAndDays){
   console.log(dateFactory.getMonthInfo()); 
   console.log(monthsAndDays.months); 
   console.log(monthsAndDays.days); 

    $scope.monthInfo = dateFactory.getMonthInfo();
    $scope.currentMonth = monthsAndDays.months[$scope.monthInfo.month];
    $scope.currentYear = $scope.monthInfo.year;
    $scope.daysOfWeek = monthsAndDays.days;
    
    $scope.getNumber = function() {
        return new Array($scope.monthInfo.daysInMonth);   
    }
    
   console.log($scope.monthInfo);
}]);