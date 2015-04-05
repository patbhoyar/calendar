myApp.directive('calIcon', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                $(elem).parent().find('.btn-primary').removeClass('btn-primary').addClass('btn-default');
                elem.removeClass('btn-default').addClass('btn-primary');
                scope.calendarIcon = attrs.icon;
            });
        }
    };
});

myApp.directive('selectCalendar', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                var data = $(elem).html()+' <span class="caret"></span>';
                console.log($.trim(data));
                $(document).find("#eventCalendar").html(data).attr('style', $(elem).attr('style'));
            });
        }
    };
});