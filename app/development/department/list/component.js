import Ember from 'ember';
export default Ember.Component.extend({
  actions: {
    deleteDep:function(){
      alert("delete");
    },
    // 参数date就是在组件类传递过来的参数
    setBirthday: function(date) {
      //  处理date的逻辑
      this.set("userBirthday", date);
    }
  }
});
