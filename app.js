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

cypherApp.controller('CypherController',['$scope', '$http', function($scope, $http) {

  $scope.cyphered = "cypheredV";
  var addOne = function (cypher) {
    return $http({
      method: 'POST',
      url: '/',
      data: cypher
    });
  };
  // $scope.addCypher() {

  //   addOne($scope.cypher);
  // };

}]);