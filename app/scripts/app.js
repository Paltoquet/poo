'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/project/:usedId',{
        templateUrl:'views/Users/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/ajouter_projet/:userdId', {
        templateUrl: 'views/Users/AjoutProjet.html',
        controller: 'AjoutProjetCtrl'
      })
      .when('/projects/', {
        templateUrl: 'views/Users/allproject.html',
        controller: 'AllProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
