/**
 * Created by marven on 2017/6/29.
 */
 import Ember from 'ember';
 export default Ember.Component.extend({
    tagName:"aaa",
    text:"button",
    onClick:null,
    actions:{
      click(){
        this.get("onClick")();
      }
    }
 })
