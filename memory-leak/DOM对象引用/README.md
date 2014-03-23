




```html
<form id="form1">
  <div id="div1">
    <input id="input1">
  </div>
  <button>btn</button>
</form>

```

##静态html标签

如果#input1被引用，此时从dom中删除 #form1 ,由于#form1中还有被引用的子节点#input1，在 Detached dom 中 会泄露 #form1 (此时是#form1,如果先删除的是#div1，Detached dom 中泄露的就是 #div1，后续删除的#form1会被正常清理，不会出现在Detached dom  tree 中)。

此例中，button 始终没有泄露，#form1删除的时候被顺利清理。

##js创建的标签

如果js创建dom元素则有所不同，还是上面的例子，如果#form1是通过js创建后加入body中的，那么如果#form1泄露（满足上例中泄露条件），#form1中的所有子节点也会泄露（不论子节点是js创建还是dom树存在的）。






## 说明

 - 不要在console 输入脚本，会影响测试结果

 - 尽量在隐身模式下测试，避免浏览器扩展脚本的影响！

 - 测试浏览器 chrome

navigator.appVersion = "5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36"