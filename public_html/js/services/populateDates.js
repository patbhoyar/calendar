myApp.service('dateFactory', function(){
     
    this.getMonthInfo = function(month, year){
        var temp = new Date();
        var theMonth = (month === 'NA')?temp.getMonth()+1:month+1;
        var theYear = (year === 'NA')?temp.getFullYear():year;
        var d = new Date(theYear, theMonth, 0);
        var isToday = 0;
                
        if(temp.getMonth() === d.getMonth() && temp.getFullYear() === d.getFullYear()){
            isToday = temp.getDate();
        }   
                
        var info = {
            month: d.getMonth(),
            daysInMonth: d.getDate(),
            year: d.getFullYear(),
            dayOnFirst: new Date(d.getFullYear(), d.getMonth(), 1).getDay(),
            isCurrentMonth: (temp.getMonth() === d.getMonth() )?1:0,
            currentDate: temp.getDate(),
            isToday: isToday
        };
        return info;
    };
});