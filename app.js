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

  var cypher = {};

  function cypherStr(str) {
    var result = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(var i  =0 ; i < str.length; i++) {

      if(str[i] === 'x') {
        result = result +'a';
      } else if (str[i] === 'y') {
        result = result +'b';
      } else if(str[i] === 'z') {
        result = result + 'c';
      } else {
        result = result + alphabet[alphabet.indexOf(str[i])+3];
      }

    }

    return result;
  }

  $scope.cyphered = "cypheredV";
  $scope.addString = function () {

    cypher.uncyphered = $scope.uncyphered;
    cypher.cyphered = cypherStr(cypher.uncyphered);
    $scope.cyphered = cypher.cyphered;
     $http({
      method: 'POST',
      url: '/api/cyphers',
      data: cypher
    }).then(function(response) {

      console.log('Success Posted in controller ', response);
    }, function (response){
      console.log('Error in Posted controller ', response);
    });

     var results = $http({
      method: 'GET',
      url: '/api/cyphers'
    }).then(function(response) {

      console.log('Success Get in controller ', response);
    }, function(response){
      console.log('Error in Get controller ', response);
    });
     console.log(results);

  };



}]);