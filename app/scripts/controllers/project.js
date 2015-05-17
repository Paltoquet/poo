/**
 * Created by webdev on 5/12/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:ProjectCtrl
 * @description
 *
 *
 * # projetcontroler c est le controller de notre page perso
 *
 *
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('ProjectCtrl', ['$scope','save','traitement', '$http', '$routeParams','$location', function ($scope,save,traitement, $http, $routeParams, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // on sauvegarde l id de notre utilisateur et ses informations
    var id=save.getid();
    $scope.user=save.getuser();
    $scope.id=save.getid();



    $scope.ajouterprojet=function(){
      $location.path('/ajouter_projet/'+id).replace()

    }



    traitement.getproject(function(data) {
      $scope.projects = data.data;
      if(data.data==[] || data.data==null || data.data.length==0) {
        $scope.projects = [
          {
            "title": "projet vide",
            "description": "pas de description",
            "createdAt": "champs vide",
            "year": "champs vide"
          }
        ];
      }
  },function(data){
      $scope.projects=[
        {
        "title":"erreur http",
        "description":"erreur http ",
        "createdAt":"erreur http",
        "year":"erreur http"
      }
      ];
    },id)
  }]);
