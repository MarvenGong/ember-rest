/**
 * Created by marven on 2017/6/29.
 */
import Ember from 'ember';
export default Ember.Component.extend({
    actions: {
        pickedDate: function(params) {
            //  发送到控制器中的setBirthday方法，
            this.sendAction("setBirthday", params);
        }
    }
});
