'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('UsersCtrl', ['$scope','traitement', '$http', '$routeParams','$location', function ($scope,traitement, $http, $routeParams, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.rechercher=function(id){
      var path = $location.path("/projet/"+id);
      $scope.recherche=$scope.find;
    }
  $scope.successCB=function(data){
    traitement.register(id);
    $scope.users=data;
    $scope.find="";
  }
    $scope.errorCB=function(){
      $scope.users={coucou :"caplante"};

    }
    traitement.get(function(successCb,errorCB) {

    }),
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
        $scope.find="";
      }),
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }
      })
  }]);
