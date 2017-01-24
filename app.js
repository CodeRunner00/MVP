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
  var addOne = function (link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    });
  };
  // $scope.inputString = "Hello World!";
});