var cypherApp = angular.module('cypher', ['ngRoute']);

// cypherApp.config(function($routeProvider, $httpProvider) {//configure routes

//   routeProvider
//   .when('/',  {
//     tempateUrl: '/cypher.html',//input cypher page
//     controller: CypherController

//   })
//   .otherwise({
//     redirectTo: '/cypher.html'
//   });


// });

cypherApp.controller('CypherController', function($scope) {
  $scope.inputString = "Hello World!";
});