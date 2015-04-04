//Used for activating a menu link
myApp.directive('makeActive', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                $('.active').removeClass('active');
                elem.addClass('active');
            });
        }
    };
});

myApp.directive('calIcon', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                $(elem).parent().find('.btn-primary').removeClass('btn-primary').addClass('btn-default');
                elem.removeClass('btn-default').addClass('btn-primary');
            });
        }
    };
});