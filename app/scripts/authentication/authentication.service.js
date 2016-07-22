/**
 * Created by bauerj on 7/22/2016.
 */
(function () {
	"use strict";

	angular.module("app.authentication")
		.factory("authenticationService", authenticationService);

	// authenticationService.$inject = ["$firebaseAuth", "firebaseDataService", "roadmapService"];
	authenticationService.$inject = ["$firebaseAuth", "firebaseDataService"];

	// function authenticationService($firebaseAuth, firebaseDataService, roadmapService) {
	function authenticationService($firebaseAuth, firebaseDataService) {
		var firebaseAuthObject = $firebaseAuth(firebaseDataService.root);

		var service = {
			firebaseAuthObject: firebaseAuthObject,
			register: register,
			login: login,
			logout: logout,
			isLoggedIn: isLoggedIn
		};

		return service;

		///// implementation

		function register(user) {
			return firebaseAuthObject.$createUser(user);
		}

		function login(user) {
			return firebaseAuthObject.$authWithPassword(user);
		}

		function logout() {
			//roadmapService.reset();
			return firebaseAuthObject.$unauth();
		}

		function isLoggedIn() {
			return firebaseAuthObject.$getAuth();
		}
	}

})();