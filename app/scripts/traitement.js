/**
 * Created by webdev on 4/24/15.
 */



angular.module('pooIhmExemplesApp')
    .service('traitement',['$http',function($http){
    var info="";
    this.post=function(data){
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users',data)
    }

    this.register=function(id){
      info=id;
    }
    this.get=function(successCB,errorCB){
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
        .success(function(data) {
          if(data.status=='success') {

            successCB(data.data);
          }
          else{
            errorCB();
          }
    })};
    this.put=function(data){
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users',data)
    }
    this.getproject=function(successCB,errorCB){
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/ Users /'+'id'+'/Projects')
        .success(function(data) {
          if (data.status == 'success') {
            successCB(data.data);
          }
          else {
            errorCB();
          }
        })};
  }]);
