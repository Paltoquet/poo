/**
 * Created by webdev on 4/24/15.
 * gere les requetes http
 */



angular.module('pooIhmExemplesApp')
    .service('traitement',['$http',function traitement($http){


    this.post=function(data){
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users',data)
    };

    this.ajoutprojet=function(id,idproject){
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+id+'/Projects/'+idproject)
    };

    this.deletefromproject=function(id,idproject){
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+id+'/Projects/'+idproject)
    }
    this.getroles=function(id,successCB,errorCB){
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+id+'/Roles')
        .success(function(data) {
          if(data.status=='success') {
            successCB(data);
          }
          else{
            errorCB();
          }
    })};
    this.get=function(successCB,errorCB){
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
        .success(function(data) {
          if(data.status=='success') {
            successCB(data);
          }
          else{
            errorCB();
          }
    })};

    this.put=function(data){
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users',data)
    };

    this.getproject=function(successCB,errorCB,id){
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+id+'/Projects')
        .success(function(data) {
          if (data.status == 'success') {
            successCB(data);
          }
          else {
            errorCB();
          }
        })};

    this.getallproject=function(successCB,errorCB){
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
        .success(function(data) {
          if (data.status == 'success') {
            successCB(data.data);
          }
          else {
            errorCB();
          }
        })};
    this.supprojet=function(successCB,errorCB,id){
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+id)
        .success(function(data) {
          if (data.status == 'success') {
            successCB(data.data);
          }
          else {
            errorCB();
          }
        })};
    this.supp=function(successCB,errorCB,id){
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+id)
        .success(function(data) {
          if (data.status == 'success') {
            successCB(data.data);
          }
          else {
            errorCB();
          }
        })};
  }]);
