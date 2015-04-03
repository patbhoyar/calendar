myApp.factory('dateFactory', function(){
     
    var dateFactory = {};
    
    dateFactory.getMonthInfo = function(){
        var temp = new Date();
        var d = new Date(temp.getFullYear(), temp.getMonth()+1, 0);
        var info = {
            month: d.getMonth(),
            daysInMonth: d.getDate(),
            year: d.getFullYear(),
            dayOnFirst: new Date(d.getFullYear(), d.getMonth(), 1).getDay()
        };
        return info;
    };
    return dateFactory;
});