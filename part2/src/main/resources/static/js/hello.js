angular
		.module('hello', ['ngMaterial', 'ngRoute'])
		.config( function(
				$mdThemingProvider,
				$routeProvider, $httpProvider ) {

			// configuration of the routs
			$routeProvider.when('/', {
				templateUrl : 'home.html',
				controller : 'home'
			}).when('/login', {
				templateUrl : 'login.html',
				controller : 'navigation'
			}).otherwise('/');
			$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

			// configure the material theme
			$mdThemingProvider.theme('default')
					.primaryPalette('blue')
					.accentPalette('orange');
		})
		.controller('navigation', function($rootScope, $scope, $http, $location) {

			var authenticate = function(credentials, callback) {

				var headers = credentials ? { authorization : "Basic "
					+ btoa(credentials.username + ":" + credentials.password)
				} : {};

				$http.get('user', {headers : headers}).success(function(data) {
					if (data.name) {
						$rootScope.authenticated = true;
					} else {
						$rootScope.authenticated = false;
					}
					callback && callback();
				}).error(function() {
					$rootScope.authenticated = false;
					callback && callback();
				});
			};

			authenticate();
			$scope.credentials = {};
			$scope.login = function() {
				authenticate($scope.credentials, function() {
					if ($rootScope.authenticated) {
						$location.path("/");
						$scope.error = false;
					} else {
						$location.path("/login");
						$scope.error = true;
					}
				});
			};
			$scope.logout = function() {
				$http.post('logout', {}).success(function() {
					$rootScope.authenticated = false;
					$location.path("/");
				}).error(function() {
					$rootScope.authenticated = false;
				});
			}
		})
		.controller('home', function($scope, $http) {
			$http.get('/greeting/').success(function(data) {
				$scope.greeting = data;
			})
		});