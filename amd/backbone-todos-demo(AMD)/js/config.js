require.config({
  baseUrl: 'js/',
  // deps:['main'],
  paths: {
    
    "base": "../bower_components/todomvc-common/base",
    "jquery": "../bower_components/jquery/jquery",
    "underscore": "../bower_components/underscore/underscore",
    "backbone": "../bower_components/backbone/backbone",
    "localStorage": "../bower_components/backbone.localStorage/backbone.localStorage"

  },

  shim: {
    "backbone": {
      deps: ["jquery", "underscore"],exports: "Backbone"
    },
    "localStorage":{
      deps:["backbone"],exports:"Backbone"
    },
    "underscore":{
      deps:[],exports:"_"
    }
  }
});
