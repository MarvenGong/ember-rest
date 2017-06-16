import Ember from "ember";
export default Ember.Controller.extend({
  userService:Ember.inject.service('user-service'),
  //user:this.get('userService').get('editUser'),
  actions:{
    submitUser(){

    }
  }
})
