/**
 * Created by bauerj on 7/22/2016.
 */
(function () {
	"use strict";

	angular.module("app.core")
		.factory("roadmapService", roadmapService);

	roadmapService.$inject = ["$firebaseArray", "firebaseDataService"];

	function roadmapService($firebaseArray, firebaseDataService) {

		var roadmaps = null;

		var service = {
			Roadmap: Roadmap,
			getRoadmapsByUser: getRoadmapsByUser,
			reset: reset
		};

		return service;

		///// implementation

		function Roadmap() {
			this.title = "";
			this.startDate = "";
		}

		function getRoadmapsByUser(uid) {
			if (!roadmaps) {
				roadmaps = $firebaseArray(firebaseDataService.users.child(uid).child("roadmaps"));
			}
			return roadmaps;
		}

		function reset() {
			if (roadmaps) {
				roadmaps.$destroy();
				roadmaps = null;
			}
		}
	}

})();