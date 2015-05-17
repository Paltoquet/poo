'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('UsersCtrl', ['$scope','$filter','$route','traitement','save', '$http', '$routeParams','$location', function ($scope,$filter,$route,traitement,save, $http, $routeParams, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.rechercher=function(id,user){

      //sauvegarde notre utilisateur dans notre service de transit
      save.saveuser(user,id);
      //change notre url
      $location.path('/project/'+id).replace();
    }
    //service traitement  s'occupe des requetes http
    traitement.get(function(data){
      $scope.users=data.data;
      $scope.find="";
    },function(){
      $scope.users={coucou :"caplante"};
    });

    $scope.supprimer=function(id){
      traitement.supp(function(data){},function(data){},id);
      setTimeout(function ma(){$route.reload()},1500);
    }

  }]);
