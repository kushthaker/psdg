var app = angular.module('psdg', ['ngRoute']);



app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '../partials/home.html',
		controller: 'psdgCtrl as ctrl'
	})
	.when('/about', {
		templateUrl: '../partials/about.html',
		controller: 'psdgCtrl as ctrl'
	})
	.when('/services', {
		templateUrl: '../partials/services.html',
		controller: 'psdgCtrl as ctrl'
	})
	.when('/thoughts', {
		templateUrl: '../partials/thoughts.html',
		controller: 'psdgCtrl as ctrl'
	})
	.when('/contact', {
		templateUrl: '../partials/contact.html',
		controller: 'psdgCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/',
	})

});


