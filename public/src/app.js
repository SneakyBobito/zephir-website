var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/team', {
            templateUrl : 'pages/team.html',
            controller  : 'teamController'
        })

        .when('/get-started', {
            templateUrl : 'pages/get-started.html',
            controller  : 'getStartedController'
        });

    $locationProvider.html5Mode(true);
});

app.controller('mainController', function($scope, $http) {
    $http.get('https://api.github.com/repos/phalcon/zephir/releases').then(function(result) {
        $scope.latestRelease = result.data[0];
    });
});

app.controller('teamController', function($scope) {
});

app.controller('getStartedController', function($scope) {
});