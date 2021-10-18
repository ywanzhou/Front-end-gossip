# Leader：马上中秋节了，你在网站的console面板中画一个嫦娥奔月，要有逼格。

Leader：小周，还有十来天就中秋节了，你这几天在咱们网站的console面板中画一个嫦娥奔月，咱也来蹭一波中秋节的热度。

我：啊？console面板画嫦娥奔月？

![](image/%E8%A1%A8%E6%83%85%E5%8C%851.jpg)

Leader：对，这个工作就交给你了。

我：好的，好的（内心：还能这么操作？行吧，去研究研究怎么实现吧，可不能耽误我摸鱼）。

正文开始~

## console对象

那既然是在console面板画画，肯定离不开`console`对象，`console`对象中的`console.log()`方法是我们前端开发人猿每天都在用的一个方法，可以说是调试利器。

但是`console`对象中除了`log()`方法，还存在`console.info()`、`console.warn()`和`console.error`等方法，这些方法基本都类型，区别就是输出的内容类型不一样。

除了上面几个比较简单的之外，还有几个比较有意思的方法。

### 打印表格

`console`对象中存在一个`table()`方法，接受一个必要的参数，这个参数可以是一个数组或者对象，最终的结果是以表格的形式显示的。

如下代码展示了`console.table()`的用法：

```JavaScript
var arr = [
    { name: '张三', age: 18, sex: '男' },
    { name: '李四', age: 19, sex: '男' },
    { name: '王五', age: 20, sex: '男' },
]
console.table(arr)
```


代码运行结果如下所示：

![](image/%E6%89%93%E5%8D%B0%E8%A1%A8%E6%A0%BC.png)

### 分组

当我们需要打印特别多的信息时，可能页面的数据过多无法快速准确的定位我们想要的信息。`console`对象中提供了两组方法可以帮助我们来完成这个分组操作，具体如下：

- `console.group()`和`console.groudEnd()`

- `console.groupCollapsed()`和`console.groudEnd()`

这两者的区别就是前者分组是默认展开的，后者默认折叠。

`console.group()`和`console.groupCollapsed()`接受一个参数，表示分组名称；`console.groudEnd()`表示当前分组结束。

如下展示展示了分组的用法：

```JavaScript
// 默认展开
console.group('person')
console.log('name: 张三')
console.log('age: 18')
console.groupEnd()
// 默认折叠
console.groupCollapsed('person')
console.log('name: 张三')
console.log('age: 18')
console.groupEnd()
```


代码运行结果如下所示：

![](image/%E5%88%86%E7%BB%84.png)

### 计数操作

`console`对象中的`count()`方法可以用来完成计数的操作，该方法接受一个可选的参数，即输出的内容，默认为default；该方法还可以根据不同的参数来分别计数。

如下代码展示了`console.count()`的用法：

```JavaScript
// 默认参数
console.count()
console.count()
console.count()
// 根据不同参数分别进行计数
console.count('一碗周')
console.count('happy coding')
console.count('一碗周')
console.count('happy coding')
console.count('一碗周')
console.count('happy coding')
```


代码运行结果如下所示：

![](image/%E8%AE%A1%E6%95%B0.png)

### 样式美化

我们还可以为`console.log()`输出的样式进行美化，对输入的样式美化主要是通过`%c`来完成的。

我们先来看一下掘金浏览器插件中的console面板：

![](image/%E6%8E%98%E9%87%91console%E9%9D%A2%E6%9D%BF.png)

我们可以看到这个样式就与默认的有所不同，实际上实现这种效果的代码是下面这样的：

```JavaScript
console.log('%cHi! 我是掘金插件的产品经理，\n作为一名曾经的开发者，很高兴能以这样的方式与你认识，\n如果你对插件有什么要吐槽的或者好的想法分享', 'line-height: 30px')
console.log('欢迎给我发送邮件交流: %czhangshaozhuang@bytedance.com', 'line-height: 30px; color: red')
```


我们现在就对这个语法进行解析，如下图所示：

![](image/console%E6%A0%B7%E5%BC%8F%E8%AF%A6%E8%A7%A3.png)

在遇到`%c`后，会将后面的样式作为`%c`后文字的样式，遇到下一个`%c`会结束，下一个`%c`还可以在下一个参数的位置写CSS样式，依次类推。

如下代码展示了一句话中多个`%c`，具体代码如下：

```JavaScript
console.log('%c红色%c蓝色%c绿色', 'color: red;', 'color: blue;', 'color: green;')
```


代码运行结果如下所示：

![](image/%E5%A4%9A%E4%B8%AA%E6%A0%B7%E5%BC%8F.png)

`console`中允许的CSS属性有限，具体可以参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Console#%E4%B8%BA%E6%8E%A7%E5%88%B6%E5%8F%B0%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F)

如果想要设置多个属性，直接使用字符串的方式写出来的效果不易读，可以使用数组的方式将每一项写出，在通过`join()`方法拼接，示例代码如下所示：

```JavaScript
// 将 CSS 属性放置数组内，通过 join 拼接为一个字符串
const styles = [
    'color: red',
    'background: yellow',
    'font-size: 24px',
].join(';')
console.log('%cHello 一碗周', styles)
```


## 画嫦娥奔月

经过前面对`console`对象的补充和复习，现在画嫦娥奔月可以有两种选择方案，具体如下：

- 直接使用图片的方式

- 实现字符画的方式

现在我们对着两种方式分别进行实现。

### 在console面板引入图片

我们前面学习了可以通过`%c`的方式来设置CSS属性，这个方式是支持`background`属性的，我们可以将嫦娥奔月的图片作为背景图引入，实现代码如下所示：

```JavaScript
console.log('%c', "background-image: url('/image/change_small.png'); background-size:100%;")
```


理想的效果是在console面板显示下面这张图片

![](image/change_small.png)

可能是由于浏览器兼容问题导致这个图片无法显示

### 一个兼容的嫦娥奔月

由于直接使用图片绘制存在兼容问题，这里我们字符画的方式来绘制嫦娥奔月。

首先我们通过js的方式引入一个图片，代码如下：

```JavaScript
let img = new Image()
img.src = './image/change_small.png'
img.onload = () => {
    // 图片加载完毕执行
}
```


第二步，我们需要定义`<canvas>`元素，它不需要显示，为后面通过canvas获取像素点打基础：

```html
<canvas id="canvas" hidden></canvas>
```


第三步，定义一个将图片渲染值`<canvas>`元素，并返回所有的像素点

```JavaScript
function getPixelData() {
    const canvas = document.getElementById('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    // 将img绘制到 canvas 容器中
    ctx.drawImage(img, 0, 0, img.width, img.height)
    // 获取像素数据，该数据为一个二维数组，第一次表示高有多少个像素点，第二次表示宽中的像素点
    return ctx.getImageData(0, 0, img.width, img.height).data

}
```


第四步，根据像素点的颜色来决定拼接什么字符串，函数如下：

```JavaScript
// 把像素数据拼接成字符
function joinStringDraw(pixel) {
    // 定义一个空的字符串，用来存储我们的字符画
    let str = ''
    // 定义一个步长，因为一个像素点在转换为字符画时，相当于转换为一个字符，一个字符的默认大小为14像素，也就是说如果步长为1的话，这张图片被放大了14倍
    let step = 4
    // 通过双重for循环来获取每一个像素点
    for (let h = 0; h < img.height; h += step) {
        str += '\n'
        for (let w = 0; w < img.width; w += step) {
            // 这里提前填充一个空格的原因是因为一个字符的高度一般是宽度的2倍，所以这里的目的是增加字符的宽度
            str += ' '
            // 获取一个像素点的rgb值
            let pos = (h * img.width + w) * 4,
                r = pixel[pos],
                g = pixel[pos + 1],
                b = pixel[pos + 2]
            // 透明像素点在这里会被识别为纯黑色，也就是 rbg(0, 0, 0)，只要不是黑色就填充一个●，黑色区域就填充空格
            str += [r, g, b].join('') !== '000' ? '●' : ' '
        }
    }
    return str
}
```


第五步，编写图片加载完毕后执行的函数：

```JavaScript
img.onload = () => {
    // 获取像素数据
    const pixelData = getPixelData()
    // 拼接字符画
    const str = joinStringDraw(pixelData)
    // 打印最终的str
    console.log(str)
}
```


最终运行解决如下：

![](image/%E5%AB%A6%E5%A8%A5%E5%A5%94%E6%9C%88.png)

现在就可以放心的摸鱼了，哈哈哈~~

## 写在最后

本篇文章中的故事纯属虚构，写这篇文章主要是为了可以巩固一下console对象，毕竟这个对象是前端开发中一个很重要的对象。

大家伙既然看完了，欢迎点赞留言，谢谢各位看官。

