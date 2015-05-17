'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * ajoute des uitilisateurs et des projets
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('AboutCtrl',['$scope','$route','$timeout','$http',function ($scope,$route,$timeout,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user={
      name: null,
      surname: null,
      website: null,
      email: null
    };
    $scope.test="yep"
    $scope.project={
      title:null,
      description:null,
      year:null
    }

    $scope.function=function() {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users', $scope.user)
      $timeout(function () {
        $route.reload();
      }, 1100)
    }
    $scope.ajouterprojet=function(){
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects',$scope.project)
      $timeout(function(){$route.reload()},1100);
    }
  }]);
