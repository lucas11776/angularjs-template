/* Angular-Config */

var app = angular.module('template', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    // route config
    $routeProvider.when('/', {
        templateUrl: '../app/views/home.html',
        controller: 'homeController'
    })
    .otherwise('/');

    // pretty url
    $locationProvider.html5Mode(true);

});