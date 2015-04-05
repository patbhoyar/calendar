var myApp = angular.module('calendarApp', ['ngRoute', 'firebase']);

myApp
    .config(['$routeProvider', function($rp){
            $rp
            .when('/', {
                templateUrl:'pages/homeView.html',
                controller: 'HomeController'
            })
            .when('/calendar', {
                templateUrl:'pages/calendarView.html',
                controller: 'CalendarController'
            })
            .when('/myCalendars', {
                templateUrl: 'pages/myCalendarsView.html',
                controller: 'MyCalendarsController'
            })
            .when('/delete/:index', {
                templateUrl:'edit.html',
                controller: 'DeleteController'
            })
    }])
    .run(['$rootScope','$location', '$routeParams', 'firebaseService', function($rootScope, $location, $routeParams, firebaseService) {
        $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
            //console.log('Current route name: ' + $location.path());
            //console.log($routeParams);
          
            $rootScope.myCalendars = firebaseService.getAllCalendars();
          
            $('.active').removeClass('active');
            switch($location.path()){
                case '/':
                    $('.menuHome').addClass('active');
                    break;
                case '/calendar':
                    $('.menuCalendar').addClass('active');
                    break;
                case '/myCalendars':
                    $('.menuMyCalendar').addClass('active');
                    break;
            }
        });
    }]);