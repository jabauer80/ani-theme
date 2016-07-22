(function () {
	"use strict"

	angular.module("app", [
		"ui.router",
		"ngAnimate",
		"firebase",

		"app.core",
		"app.authentication"
		//"app.landing",
		//"app.dashboard",
		//"app.roadmap"

	]).config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.when('/dashboard', '/dashboard/overview');
		$urlRouterProvider.otherwise('/login');

		$stateProvider
			.state('base', {
				abstract: true,
				url: '',
				templateUrl: 'views/base.html'
			})
			.state('login', {
				url: '/login',
				parent: 'base',
				templateUrl: 'views/login.html',
				controller: 'AuthenticationController',
				controllerAs:"vm"
			})
			.state('dashboard', {
				url: '/dashboard',
				parent: 'base',
				templateUrl: 'views/dashboard.html',
				controller: 'DashboardCtrl'
			})
			.state('overview', {
				url: '/overview',
				parent: 'dashboard',
				templateUrl: 'views/dashboard/overview.html'
			})
			.state('reports', {
				url: '/reports',
				parent: 'dashboard',
				templateUrl: 'views/dashboard/reports.html'
			});
	})
})();


