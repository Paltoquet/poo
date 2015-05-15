/**
 * Created by webdev on 5/12/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('ProjectCtrl', ['$scope','traitement', '$http', '$routeParams','$location', function ($scope,traitement, $http, $routeParams, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title="";
    $scope.description="";
    $scope.year="";
  var successCB=function(data){
    $scope.title=data.title;
    $scope.descriprion=data.description;
    $scope.year=data.year;
  }
    var errorCB=function(data){
      $scope.title="erreur";
    }

  }]);
