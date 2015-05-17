/**
 * Created by webdev on 5/16/15.
 */


'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AjoutProjetCtrl
 * permet de lier un projet a un utilisateur
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('AjoutProjetCtrl',['$scope','$http','$timeout','$location','save','traitement',function ($scope,$http,$timeout,$location,save,traitement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var id=save.getid();
    $scope.projects={
      title: null,
      year: null,
      description: null,
      createdAt: null,
      updateAt: null
    };
    $scope.find="";
    traitement.getallproject(function(data){
      $scope.projects=data;
    },function(data){
      $scope.projects="erreur"
    });
    $scope.ajout=function(idproject){
      traitement.ajoutprojet(id,idproject);
      $timeout(function bb(){
          $location.path('/project/'+id).replace();
        }
      ,1700);
    }
    $scope.supp=function(idproject){
      traitement.deletefromproject(id,idproject)
      $timeout(function aa(){
        $location.path('/project/'+id).replace();
      },1700);
    }
  }]);
/**
 * Created by webdev on 5/17/15.
 */
