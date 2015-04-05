myApp
.controller('CalendarController',['$scope', 'dateFactory', 'monthsAndDays', '$timeout', function($scope, dateFactory, monthsAndDays, $timeout){
    
    $scope.daysOfWeek = monthsAndDays.days;
    
    $scope.reinitializeData = function(newMonth, newYear){
        $scope.monthInfo = dateFactory.getMonthInfo(newMonth, newYear);
        $scope.currentMonth = monthsAndDays.months[$scope.monthInfo.month];
        $scope.currentYear = $scope.monthInfo.year;
        $scope.isCurrentMonth = $scope.monthInfo.isCurrentMonth;
        $scope.currentDate = $scope.monthInfo.currentDate;
        $scope.isToday = $scope.monthInfo.isToday;
    
        //console.log($scope.monthInfo);
    }
    
    $scope.reinitializeData('NA','NA');
    
    $scope.getNumber = function() {
        var arr = [];
        var totalBlocks = 1;
        var x = 0;
        for(i = 0; i<$scope.monthInfo.dayOnFirst; i++){
            arr.push(' ');
            x++;
        }
        for(i = 0; i<$scope.monthInfo.daysInMonth; i++){
            arr.push(i+1);
            x++;
        }
        if(x>35){
            totalBlocks = 42;
        }else if(x > 28 && x <= 35){
            totalBlocks = 35;
        }else{
            totalBlocks = 28;
        }
        for(i = x; i<totalBlocks; i++){//35 = total number of blocks per month
            arr.push('');
        }
        return arr;
    }
    
    $scope.changeMonth = function(which){
        var newYear = 0;
        var newMonth = 0;
        
        if(which === 'prev'){
            if($scope.monthInfo.month > 0){
                newMonth = $scope.monthInfo.month-1;
                newYear = $scope.monthInfo.year;
            }else{
                newMonth = 11;
                newYear = $scope.monthInfo.year-1;
            }
        }else{
            if($scope.monthInfo.month < 12){
                newMonth = $scope.monthInfo.month+1;
                newYear = $scope.monthInfo.year;
            }else{
                newMonth = 1;
                newYear = $scope.monthInfo.year+1;
            }
        }
        $scope.reinitializeData(newMonth, newYear);
    }
    
    $scope.dblClk = function(date){
        $scope.modalSelectedDate = date + " " + monthsAndDays.months[$scope.monthInfo.month] + ", " + $scope.currentYear;
        $('#myModal').modal();
    }
    
    $scope.addEvent = function(){
        
    }
    
}]);