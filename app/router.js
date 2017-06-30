import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("user",{path:"/user"},function () {
    this.route("list",{path:"/list"});
    this.route('add',{path:'/add'});
    this.route('edit',{path:'/edit'});
  });
  this.route('department',{path:'/department'},function(){
    this.route('list',{path: '/list'});
  })
  this.route("nav",{path:"/nav"});
});

export default Router;
