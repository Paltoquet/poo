/**
 * Created by webdev on 5/16/15.
 * service de transit de l'utilisateur entre les pages
 */


angular.module('pooIhmExemplesApp')
  .service('save',function save(){

    var utilisateur={};
    var userid="";
    var userproject={};

    this.saveuser=function(user,id){
        userid=id;
        utilisateur=user;
    };

    this.getuser=function(){
      return utilisateur;
    };
    this.getid=function(){
      return userid;
    }
  }
);
