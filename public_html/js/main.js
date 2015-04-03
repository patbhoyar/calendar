var myApp = angular.module('calendarApp', ['ngRoute']);

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
            .when('/add', {
                templateUrl: 'edit.html',
                controller: 'AddController'
            })
            .when('/delete/:index', {
                templateUrl:'edit.html',
                controller: 'DeleteController'
            })
    }]);