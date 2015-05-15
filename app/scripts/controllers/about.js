'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('Monservice')
  .controller('AboutCtrl',['$scope','$http',function ($scope,$http) {
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

    $scope.function=function(){
    $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users',$scope.user)
      .succes(function(data){
      });
    }
  }]);
