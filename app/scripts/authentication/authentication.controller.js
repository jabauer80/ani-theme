/**
 * Created by bauerj on 7/22/2016.
 */
(function () {
	"use strict";

	angular.module("app.authentication")
		.controller("AuthenticationController", AuthenticationController);

	AuthenticationController.$inject = ["$location", "authenticationService"];

	function AuthenticationController($location, authenticationService) {







		var vm = this;

		vm.register = register;
		vm.login = login;
		vm.error = null;

		vm.user = {
			email: "",
			password: ""
		}

		function register(user) {
			return authenticationService.register(user)
				.then(function () {
					console.log(user);
					vm.login(user);
				})
				.catch(function (error) {
					console.log(error);
					vm.error = error;
				});
		}

		function login(user) {
			return authenticationService.login(user)
				.then(function (loggedInUser) {
					console.log(loggedInUser);
					$location.path("/dashboard");
				})
				.catch(function (error) {
					console.log(error);
					vm.error = error;
				});
		}
	}

})();