var cypherApp = angular.module('cypher', ['ngRoute']);

cypherApp.config(function($routeProvider, $httpProvider) {//configure routes
  .routeProvider
  .when('/',  {
    tempateUrl: '/cypher.html',//input cypher page
    controller: CypherController

  })
  .otherwise({
    redirecTo: '/links'
  });


});

cypherApp.controller('CypherController', function($scope) {
  $scope.message = "Hello World!";
});