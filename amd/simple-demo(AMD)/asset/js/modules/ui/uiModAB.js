// 模块定义
define(['data/dataModA','data/dataModB'],function(dataModA,dataModB) {
  return {
    render:function() {
      console.log('---------------------');
      console.log('uiModAB render start...');
      console.log('use data from dataMod:',dataModA.name,dataModB.name); 
      console.log('uiModAB render end...');
    }
  };
});