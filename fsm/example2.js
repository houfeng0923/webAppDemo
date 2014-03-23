
// be dependent on jQuery Event

function StateMachine () {}
StateMachine.fn = StateMachine.prototype;

var Event = {
  on:function() {
    if(!this.o) this.o = $({});
    this.o.on.apply(this.o,arguments);
  },
  trigger:function() {
    if(!this.o) this.o = $({});
    this.o.trigger.apply(this.o,arguments);
  }
};

$.extend(StateMachine.fn,Event);


StateMachine.fn.add = function(state) {
  this.on('change',function(e,current) {
    if(state==current){ state.activate();}
    else state.deactivate();
  });
  // state.active = $.proxy(function() {
  //   this.trigger('change',state);
  // },this);
};


var sm = new StateMachine();

var state1 = {
  activate:function() {
    console.log('state1,activate');
  },
  deactivate:function() {
    console.log('state1,deactivate');
  }
};

var state2 = {
  activate:function() {
    console.log('state2,activate');
  },
  deactivate:function() {
    console.log('state2,deactivate');
  }
};

sm.add(state1);
sm.add(state2);

sm.trigger('change',state1);
