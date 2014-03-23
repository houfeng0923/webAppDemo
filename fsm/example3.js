

function StateMachine (cfg) {

  this.cfg = cfg;
  this.currentState = cfg.initState;
  this.states = cfg.states;
  this.events = cfg.events;

  this.defineEvents();
}

StateMachine.prototype = {

  handlerEvent:function(e,param) {
    if(!this.currentState) return;

    var action = this.states[this.currentState][e];
    if(!action) return;

    this.currentState = action.call(this,param);
  },

  defineEvents:function() {
    var self = this,
        events = this.events;
    events.forEach(function(fn,e) {
      fn.call(self,function(e,param)){
        self.handlerEvent(e,param);
      });
    });
  }
};


var config = {
  initState:'open',
  states:{
    'open':{
      closeDoor:function(param) {
        //invoke component's method 
        return 'close';
      }
    },
    'close':{
      openDoor:function(param) {
        //invoke component's method 
        return 'open';
      }
    }
  },
  events:{
    'openDoor':function(fn) {
      // registe click , fn
    },
    'closeDoor':function(fn) {
      //registe click ,fn
    }
  }
};


