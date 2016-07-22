(function () {
	"use strict"

	angular.module("app", [
		"ui.router",
		"ngAnimate",
		"firebase",

		"app.core",
		"app.authentication",
		"app.dashboard",
		"app.roadmap"

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
				templateUrl: 'scripts/authentication/views/login.html',
				controller: 'AuthenticationController',
				controllerAs: "vm"
			})
			.state('dashboard', {
				url: '/dashboard',
				parent: 'base',
				templateUrl: 'scripts/dashboard/views/dashboard.html',
				controller: 'DashboardController'
			})
			.state('overview', {
				url: '/overview',
				parent: 'dashboard',
				templateUrl: 'scripts/overview/views/overview.html',
				controller: 'AuthenticationController',
				controllerAs: "vm"
			})
			.state('reports', {
				url: '/reports',
				parent: 'dashboard'

			})
			.state('roadmaps', {
				url: '/roadmaps',
				parent: 'dashboard',
				templateUrl: 'scripts/roadmap/views/roadmaps.html',
				controller: 'RoadmapController',
				controllerAs: "vm"
			});
	});
})();


