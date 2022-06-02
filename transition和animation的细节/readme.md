# 你可能不知道的一些a标签的小细节

## 目录

*   [🍒 写在前面](#-写在前面)

*   [🍐 阻止默认行为](#-阻止默认行为)

*   [🍇 target属性的妙用](#-target属性的妙用)

*   [🍉 用download实现下载功能](#-用download实现下载功能)

*   [🍊 通过锚点实现丝滑滚动](#-通过锚点实现丝滑滚动)

*   [🍌 写在最后](#-写在最后)

## 🍒 写在前面

关于a标签是什么，我就不浪费时间写了；这篇文章介绍几个a标签的小细节，如下图所示：

![](image/a标签的小细节_JtzSI90Yb8.png)

## 🍐 阻止默认行为

当我们不需要`<a>`标签点击发生跳转行为可以通过以下两种方式实现：

*   通过`href`属性实现，可以使其指向空或者不反悔任何内容：

    ```html
    <!-- 通过 href 实现点击无跳转 -->
    <a href="javascript:;">a标签</a>
    <a href="javascript:void(0);">a标签</a>
    ```

*   通过事件处理，阻止其默认行为

    ```html
    <body>
      <!-- 通过 href 实现点击无跳转 -->
      <!-- 通过事件阻止默认行为 -->
      <a href="https://juejin.cn" onclick="return false">掘金</a>
      <a href="https://juejin.cn" id="link">掘金</a>
      <script>
        const $a = document.getElementById('link')
        $a.addEventListener('click', e => {
          e.preventDefault()
        })
      </script>
    </body>
    ```

## 🍇 target属性的妙用

`target`属性用于设置以哪种方式打开链接（说了个废话），他有几个关键字，比如`_self`（当前窗口打开）、`_blank`（新窗口打开），除了关键字，它还支持使用**任意名称作为值**，而且**值相同情况下会使用一个标签页打开链接**。

这个特性非常的有用，这可以完全避免打开很多标签页，实例代码如下：

```javascript
<a href="https://juejin.cn" class="btn" target="juejin">首页</a>
<a
  href="https://juejin.cn/user/3350967174838701"
  class="btn"
  target="juejin"
  >个人主页</a
>
```

代码运行效果如下：

![](image/01_j6T_5I8i-Z.gif)

## 🍉 用download实现下载功能

如果为`<a>`标签增加一个download属性，可以实现下载功能，但是这**仅限于同源**，如果是跨域下载的话可以借助`blob:URLs`实现，实例代码如下：

```html
<body>
  <a
    href="javascript:void(0);"
    class="btn"
    onclick="downloadFile(event)"
    src="https://p6-passport.byteacctimg.com/img/user-avatar/75e47e118bbc3ff51aa2731f74953c35~300x300.image"
    >下载图片</a
  >
  <script>
    function downloadFile(e) {
      const url = e.target.getAttribute('src')
      const image = new Image()

      image.setAttribute('crossOrigin', 'anonymous')
      image.src = url

      image.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const name = image.src.substring(image.src.lastIndexOf('/') + 1)

        canvas.width = image.width
        canvas.height = image.height

        ctx.drawImage(image, 0, 0, image.width, image.height)

        canvas.toBlob(blob => {
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')

          a.href = url
          a.download = '下载'
          a.click()
          a.remove()

          window.URL.revokeObjectURL(url)
        })
      }
    }
  </script>
</body>
```

此时点击a标签就可以实现跨域的图片下载，这里正是借用的`download`属性。

除了图片也可以下载其他类型的文件，但是需要后端配置，伪代码如下：

```javascript
export function downloadFile(e) {
  const url = e.target.getAttribute('src')
  // 文件名
  const name = url.substring(url.lastIndexOf('/') + 1)

  axios.get(url, { responseType: 'blob' }).then(res => {
    const blob = res.data
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')

    a.href = url
    a.download = name
    a.click()
    a.remove()

    window.URL.revokeObjectURL(url)
  })
}

```

使用这种方式可以更加的灵活。

## 🍊 通过锚点实现丝滑滚动

锚点定位配合CSS属性`scroll-behavior`可以实现一个非常丝滑的滚动效果，就比如**回到顶部**的功能，无需JS参与即可实现，示例代码如下：

```html
<style>
  html,
  body {
    scroll-behavior: smooth;
  }
</style>
<body>
  <div class="box">
    <img src="./../image/a标签的小细节.png" alt="" style="height: 300px" />
  </div>
  <a href="#" class="btn">回到顶部</a>
</body>

```

代码运行效果如下：

![](image/02_Eb57OeEQHR.gif)

## 🍌 写在最后

本篇文章到这就结束了，如果觉着这篇文章对你有帮助，可以点赞评论支持一下\~
