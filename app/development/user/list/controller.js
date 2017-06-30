/**
 * Created by marven on 2017/6/16.
 */
import Ember from "ember";
export default Ember.Controller.extend({
  userService:Ember.inject.service("user-service"),
  dialogShow:false,
  deleteUserTemp:null,
  actions:{
    addUser(){
      //alert("add user");
      let json={};
      json.name="list";
      json.age=25;
      this.model.push(json);
    },
    deleteUser(user){
      //alert(1);
      this.set('deleteUserTemp',user);
      this.set('dialogShow',true);
    },
    sureDeleteUser(user){
      this.get('userService').delete(user);
    },
    editUser(user){
      this.get('userService').set("editUser",user);
      this.transitionToRoute('user.edit');
    }
  }
});
