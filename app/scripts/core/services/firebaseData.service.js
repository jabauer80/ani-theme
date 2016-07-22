/**
 * Created by bauerj on 7/22/2016.
 */
(function () {
	"use strict";

	angular.module("app.core")
		.factory("firebaseDataService", firebaseDataService);

	firebaseDataService.$inject = ["FIREBASE_URL"];

	function firebaseDataService(FIREBASE_URL) {
		var root = new Firebase(FIREBASE_URL);
		var service = {
			root: root,
			users: root.child("users")
		};

		return service;
	}

})();