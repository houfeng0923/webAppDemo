// 模块定义
define(['data/dataModAll'],function(dataModAll) {
  return {
    render:function() {
      console.log('---------------------');
      console.log('uiModABC render start...');
      console.log('use data from dataMod:',dataModAll.a.name,dataModAll.b.name,dataModAll.c.name); 
      console.log('uiModABC render end...');
    }
  };
});