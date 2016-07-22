/**
 * Created by bauerj on 7/22/2016.
 */
(function () {
	"use strict";

	angular.module("app.dashboard")
		.controller("DashboardController", DashboardController);

	DashboardController.$inject = ["$scope", "$state"]

	function DashboardController($scope, $state) {

		$scope.$state = $state;

	}

})();