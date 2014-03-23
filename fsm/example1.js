
// 示例：解析‘转义’字符

function StateMachine () {

  this.state = state_first;
  this.result = [];
  
  function state_first (char) {
    if(char=='%'){
      return state_second;  
    }
    this.result.push(char);
    return state_first;
  }

  function state_second (char) {
    this.result.push('%'+char); 
    return state_first;
  }

  this.change = function(char) {
    this.state = this.state(char);
  }
  
}


var originString = "firstline%nsecond%%line";
var originArray = originString.split('');
var sm = new StateMachine();

for(var i=0;i<originArray.length;i++){
  sm.change(originArray[i]);
}

console.log(sm.result);
