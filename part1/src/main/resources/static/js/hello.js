angular
	.module('hello', ['ngMaterial'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
				.primaryPalette('blue')
				.accentPalette('orange');
	})
	.controller('home', function($scope, $http) {
		$http.get('/greeting/').success(function(data) {
			$scope.greeting = data;
		})
	});