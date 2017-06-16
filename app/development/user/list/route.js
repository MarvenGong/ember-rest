/**
 * Created by marven on 2017/6/16.
 */
import Ember from "ember";
export default Ember.Route.extend({
  userService:Ember.inject.service("user-service"),
  model(){
    return this.get("userService").get("users")
  }
})
