/**
 * Created by bauerj on 7/22/2016.
 */
(function () {
	"use strict";

	angular.module("app.roadmap")
		.controller("RoadmapController", RoadmapController);

	RoadmapController.$inject = ["firebaseDataService", "roadmapService", "user"]

	function RoadmapController(firebaseDataService, roadmapService, user) {
		var vm = this;

		vm.roadmaps = roadmapService.getRoadmapsByUser(user.uid);
		//vm.removeRoadmap = removeRoadmap;

	}


})();