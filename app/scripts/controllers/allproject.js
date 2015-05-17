/**
 * Created by webdev on 5/16/15.
 */


'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AllprojectCtrl
 * tout les projets sont présent ici
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('AllProjectCtrl',['$scope','$route','traitement',function ($scope,$route,traitement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.projects={
      title: null,
      year: null,
      description: null,
      createdAt: null,
      updateAt: null
    };
    $scope.supprimer=function(id){
      traitement.supprojet(function(data){},function(){},id);
      $route.reload();
    };
    $scope.find="";
    traitement.getallproject(function(data){
     $scope.projects=data;
    },function(data){
      $scope.projects="erreur"
    });
  }]);
