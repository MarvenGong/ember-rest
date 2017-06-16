/**
 * Created by marven on 2017/6/16.
 */
import Ember from 'ember';
export default Ember.Service.extend({
  users:[
    {
      name:"zhangsan",
      age:24
    },
    {
      name:"wangwu",
      age:24
    }
  ],
  editUser:{},
  delete(user){
    this.get("users").removeObject(user);
  }
})
