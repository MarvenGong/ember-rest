import Ember from "ember";
export default Ember.Controller.extend({
  userService:Ember.inject.service("user-service"),
  actions:{
    submitUser(){
      let data={
        name:$("#name").val(),
        age:$("#age").val()
      };
      console.log(data);
      this.get('userService').get('users').push(data);
      this.transitionToRoute('user.list');
    }
  }
})
