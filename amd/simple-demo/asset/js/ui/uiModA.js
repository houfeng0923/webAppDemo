// 非模块定义
(function(dataModA,global) {
  var uiModA = {
    render:function() {
      console.log('---------------------');
      console.log('uiModA render start...');
      console.log('use data from dataMod:',dataModA.name); 
      console.log('uiModA render end...');
    }
  };

  global.uiModA = uiModA;

})(dataModA,window);