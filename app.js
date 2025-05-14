var app = angular.module('contactApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/contacts', {
            templateUrl: 'views/list.html',
            controller: 'ContactController'
        })
        .when('/add', {
            templateUrl: 'views/add.html',
            controller: 'ContactController'
        })
        .when('/edit/:id', {
            templateUrl: 'views/edit.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/contacts'
        });
});
