# location.href与window.open()的用法与区别

> 大家好，我是[一碗周](https://juejin.cn/user/3350967174838701/posts)，一个不想被喝(内卷)的前端。如果写的文章有幸可以得到你的青睐，万分有幸~


## 写在前面

通常在Web开发中，打开一个页面有两种方式，一种是使用`location`的`href`属性来打开一个页面；还有一种就是使用`window`对象下的`open()`方法。

接下来我们就来了解一下这两种方式的用法与区别。

## location.href的用法

目前`location.href`大致有三种用法，具体如下：

1. 在前面页面打开URL

```JavaScript
location.href 
/* 或者 */
self.location.href
window.location.href
this.location.href
/* 都是等价的 */
```


2. 在父页面打开URL

```JavaScript
parent.location.href
```


3. 在顶层页面打开URL

```JavaScript
top.location.href
```


仅仅看这些内容还是不够清晰明了，我们来看一下例子：

`a.html`

```html
<body>
  <h3>a.html</h3>
  <iframe src="href-b.html" width="800px" height="700px"></iframe>
</body>
```


`b.html`

```html
<body>
  <h3>b.html</h3>
  <iframe src="href-c.html" width="750px" name="jump-b" height="600px"></iframe>
</body>
```


`c.html`

```html
<body>
  <h3>c.html</h3>
  <button id="jump-current">本页跳转</button>
  <button id="jump-parent">跳转至父级-parent</button>
  <button id="jump-top">跳转至顶级-top</button>
</body>
<script>
  let jumpCurrent = document.getElementById('jump-current')
  let jumpParent = document.getElementById('jump-parent')
  let jumpTop = document.getElementById('jump-top')

  /* 跳转 */
  // 当前页面
  jumpCurrent.onclick = () => {
    location.href = 'https://juejin.cn/user/3350967174838701/columns'
  }
  // 父级页面
  jumpParent.onclick = () => {
    parent.location.href = 'https://juejin.cn/user/3350967174838701/columns'
  }
  // 顶层页面
  jumpTop.onclick = () => {
    top.location.href = 'https://juejin.cn/user/3350967174838701/columns'
  }
</script>
```


我们创建了3个HTML页面，这几个页面的关系是`a.html`嵌套的`b.html`嵌套着`c.html`。

运行结果图如下所示：

![](image/window.open%E5%92%8Clocation.href%E7%9A%84%E5%8C%BA%E5%88%AB%E5%92%8C%E8%81%94%E7%B3%BB.gif)

通过效果图对`location.href`几种方式的区别就一目了然了。

## window.open的用法

`window.open()`方法用于打开一个新的浏览器窗口，该方法的语法结构如下：


```JavaScript
window.open(strUrl, strWindowName, [strWindowFeatures])
```


- `strUrl`：要在新打开的窗口中加载的URL。

- `strWindowName`：新窗口的名称。

&ensp;&ensp;&ensp;&ensp;可选的参数如下

&ensp;&ensp;&ensp;&ensp;- `_blank` ：打开一个新的标签页。这个是默认值

&ensp;&ensp;&ensp;&ensp;- `_parent` ：父页面打开

&ensp;&ensp;&ensp;&ensp;- `_self` ：当期页面打开

&ensp;&ensp;&ensp;&ensp;- `_top` ：顶层页面打开

&ensp;&ensp;&ensp;&ensp;- `name`：窗口名称

- `strWindowFeatures`：这是一个可选参数，列出新窗口的特征，具体如下表所示：

&ensp;&ensp;&ensp;&ensp;|参数|值|描述|
&ensp;&ensp;&ensp;&ensp;|---|---|---|
&ensp;&ensp;&ensp;&ensp;|`channelmode`|`yes|no|1|0`|窗口显示为剧场模式[全屏幕显示当前网页, 包括工具栏等],或频道模式[一般显示]|
&ensp;&ensp;&ensp;&ensp;|`directories`|`yes|no|1|0`|是否添加目录按钮, 比如在IE下可能会有一个"链接"这样的按钮在最上面出现|
&ensp;&ensp;&ensp;&ensp;|`fullscreen`|`yes|no|1|0`|使浏览器处理全屏幕模式, 并隐藏标题栏和菜单等|
&ensp;&ensp;&ensp;&ensp;|`menubar`|`yes|no|1|0`|是否显示浏览器默认的菜单栏|
&ensp;&ensp;&ensp;&ensp;|`resizeable`|`yes|no|1|0`|窗口是否可调整大小|
&ensp;&ensp;&ensp;&ensp;|`scrollbars`|`yes|no|1|0`|是否允许水平或垂直滑动条|
&ensp;&ensp;&ensp;&ensp;|`titlebar`|`yes|no|1|0`|是否添加一个标题栏|
&ensp;&ensp;&ensp;&ensp;|`toolbar`|`yes|no|1|0`|是否添加浏览器默认的工具栏|
&ensp;&ensp;&ensp;&ensp;|`status`|`yes|no|1|0`|是否显示状态栏|
&ensp;&ensp;&ensp;&ensp;|`location`|`yes|no|1|0`|是否显示搜索栏|
&ensp;&ensp;&ensp;&ensp;|`height`| |窗口的高度, 最小值为100像素|
&ensp;&ensp;&ensp;&ensp;|`width`| |窗口的宽度, 最小值为100像素|
&ensp;&ensp;&ensp;&ensp;|`left`| |窗口的最左边相对于屏幕的距离|
&ensp;&ensp;&ensp;&ensp;


示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>open</title>
</head>

<body>
  <button id="btn">打开</button>
</body>
<script>
  let btn = document.getElementById('btn')
  btn.onclick = () => {
    window.open('https://juejin.cn/user/3350967174838701/columns', 'jueJin', `status`)
  }
</script>

</html>
```


点击这个打开按钮会启动一个新的窗口，然后打开我们想要打开的URL。

## `location.href`属性与`window.open()`方法的区别

`Location.href`属性与`window.open()`方法的区别如下所示：

- `Location.href`属性是对当前浏览器窗口的URL地址对象的参考；`window.open()`方法打开一个新的窗口。

- `Location.href`属性一般用于页面的迭代，也就是重新定位当前页

- `window.open()`方法可以通过新开窗口或者说新开标签页打开一个网址，而`location.href`属性只能在当前页打开一个网址。

## 写在最后

虽然`location.href`属性与`window.open()`方法在开发的时候都可以用来做页面的跳转，但是两者的区别在某些时候还是有必要的区分的。

