// 模块定义
define(['data/dataModA'],function(dataModA) {
  return {
    render:function() {
      console.log('---------------------');
      console.log('uiModA render start...');
      console.log('use data from dataMod:',dataModA.name); 
      console.log('uiModA render end...');
    }
  };
});