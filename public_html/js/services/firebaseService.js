myApp.service('firebaseService', function($firebaseArray){
    
    var ref = new Firebase("https://mycalendars.firebaseIO.com");
     
    this.getAllCalendars = function(){
        
        var calendars = $firebaseArray(ref);
        var myCalendars = [];
        calendars.$loaded().then(function() {    
            $.each(calendars, function(index, value){
                myCalendars.push(value);
            });
        });
        return myCalendars;
    }
    
    this.addCalendar = function(calendar){
        var myCalendars = $firebaseArray(ref);
        myCalendars.$add(calendar).then(function(ref) {
            $(document).find('#myModal').modal('hide');
        });
        
        return this.getAllCalendars();
    }
    
    
//    calendars: {[
//        {
//            'name'  :   'birthdays',
//            'icon'  :   'gift',
//            'color' :   'ccc'
//        },
//        {
//            'name'  :   'anniversaries',
//            'icon'  :   'heart',
//            'color' :   'f00'
//        },
//        {
//            'name'  :   'meetings',
//            'icon'  :   'briefcase',
//            'color' :   '0f0'
//        }
//    ]}
});