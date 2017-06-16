/**
 * Created by marven on 2017/6/16.
 */
import DS from "ember-data";
export default DS.Model.extend({
  name:DS.attr("string"),
  age:DS.attr("integer")
})
