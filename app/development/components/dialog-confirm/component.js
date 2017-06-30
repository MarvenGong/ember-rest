import Ember from 'ember';
export default Ember.Component.extend({
  sureText:"OK",
  cancelText:"Cancel",
  sureCallback:null,
  text:null,
  //classNameBindings:["show"],
  show:true,
  actions:{
    sure(){
      this.get('sureCallback')();
      this.set("show",false);
    },
    cancel(){
      this.set("show",false);
    }
  }
})
