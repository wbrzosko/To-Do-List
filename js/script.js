angular.module('app',['ngRoute']) 
    
    .controller('TodoController', ['$scope', 'Todos', function($scope, Todos) {
        $scope.todos = Todos;
    }])

    .factory('Todos', function() {
    return [
            { name: 'Master HTML/CSS/Javascript', completed: true },
            { name: 'Learn AngularJS', completed: false },
            { name: 'Build NodeJS backend', completed: false },
            { name: 'Get started with ExpressJS', completed: false },
            { name: 'Setup MongoDB database', completed: false },
            { name: 'Be awesome!', completed: false },
        ];
    })

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider  
            .when('/', {
                templateUrl: '/todos.html',
                controller: 'TodoController'
            });
    }]);