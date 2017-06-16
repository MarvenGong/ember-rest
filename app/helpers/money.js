/**
 * Created by marven on 2017/6/16.
 */
import Ember from "ember";
export default Ember.Helper.helper(function (value) {
  let dollars = Math.floor(value / 100);
  let cents = value % 100;
  let sign = '$';

  if (cents.toString().length === 1) { cents = '0' + cents; }
  return `${sign}${dollars}.${cents}`;
})
