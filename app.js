var cypherApp = angular.module('cypher', ['ngRoute']);

// cypherApp.config(function($routeProvider, $httpProvider) {//configure routes

//   $routeProvider
//   .when('/',  {
//     tempateUrl: '/cypher.html',//input cypher page
//     controller: CypherController

//   })
//   .otherwise({
//     redirectTo: '/cypher.html'
//   });


// });


.factory('cypherStr', function cypherStr() {

  var cypher(str) {
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
  return {
    cypher: cypher
  }
});

cypherApp.controller('CypherController',['cypherStr','$scope', '$http', function(cypherStr, $scope, $http) {

  var cypher = {};



  $scope.cyphered = "";
  $scope.addString = function () {
    function allCyphers(results) {
      var cyphs = "";
      for(var i = results.length-1 ;i > results.length-6; i--) {
        cyphs = cyphs+ "uncyphered : " + results[i].uncyphered +" AND cyphered : "+results[i].cyphered +'          |||||||            ';
      }
      $scope.cyphers = cyphs;
    }
    cypher.uncyphered = $scope.uncyphered;
    cypher.cyphered = cypherStr.cypher(cypher.uncyphered);
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
      allCyphers(response.data);
    }, function(response){
      console.log('Error in Get controller ', response);
    });
  };
}]);