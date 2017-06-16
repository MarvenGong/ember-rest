/**
 * Created by marven on 2017/6/16.
 */
import Ember from 'ember';
export default Ember.Service.extend({
  users:[
    {
      id:0,
      name:"zhangsan",
      age:24
    },
    {
      id:1,
      name:"wangwu",
      age:24
    }
  ],
  editUser:{},
  delete(user){
    this.get("users").removeObject(user);
  }
})
