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
    }]);