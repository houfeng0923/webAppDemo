
// 非模块定义
(function(dataModA,dataModB,global) {
  var uiModAB = {
    render:function() {
      console.log('---------------------');
      console.log('uiModAB render start...');
      console.log('use data from dataMod:',dataModA.name,dataModB.name); 
      console.log('uiModAB render end...'); 
    }
  };

  global.uiModAB = uiModAB;

})(dataModA,dataModB,window);