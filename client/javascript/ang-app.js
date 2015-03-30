var app = angular.module("MEAN-Template-Angular", ["ngRoute"]);

// Configure routes for this application
app.config(["$routeProvider", "$locationProvider", 
  function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
      templateUrl: "/html/partials/home.html",
      controller: "HomeController"
    }).when("/profile", {
      templateUrl: "/html/partials/profile.html",
      controller:"ProfileController"
    }).otherwise({
      redirectTo: "/"
    });
}]);

// This controll controls the home page!!!
app.controller("HomeController", ["$scope", "$location", "$http","$window",
  function($scope, $location, $http, $window) {
    $scope.githubLogin = function() {
      console.log($location.$$host);
      // Reroute to github authentication URL
      var newURL = "http://" + $location.$$host + ":" + $location.$$port + "/auth/github";
      $window.location.href = newURL;
    }

    $scope.getUsers = function() {
      console.log("Making get request");
      $http.get('/api/users/username/jimbob').
        success(function(data, status, headers, config) {
          console.log(data);
          $scope.username = data.username;
        }).
        error(function(data, status, headers, config) {
          console.log("Error, idk");
        });
    }
  }
]);

app.controller("ProfileController", ["$scope", "$location", "$http",
  function($scope, $location, $http) {

  }
]);

// Simple logging to make sure everything loaded correctly
console.log("Angular has been loaded!");
console.log("Test lint");