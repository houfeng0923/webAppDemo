

/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;
 
require(['jquery','routers/router','views/app-view'],function($,router,AppView){
  "use strict";

  $(function() {
    new AppView();  
    Backbone.history.start();
  });
});

