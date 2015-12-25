var app = angular.module('citygis', ['ngRoute']);

app.controller('MainCtrl', function($scope) {
	$scope.message = "Connecties uit angular";
});

app.config(['$routeProvider', function($routeProvider) {

}]);