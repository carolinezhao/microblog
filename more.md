# microblog 2.0

## 用 textarea 替换 input

熟悉 Bootstrap 的 CSS 标签，布局未完成

## dismiss alert

目前可以手动，希望改成自动

## 换行输入，换行展示

换行/回车：

* 页面输入：textarea 支持自动换行、手动换行
* 数据库存/取：换行处用 `\r\n` 标记
* 数据输出到页面展示：HTML 中用 `<br/>` 表示换行

3 种方法：

* 输出前处理数据，用 `<br/>` 代替 `\r\n` (用到正则表达式)，在 HTML 中直接可用；<br>
缺点：多个空格会合并为一个。

* (目前使用) 在 HTML 需要显示数据的地方用 `<div></div>`，并设置样式 `white-space: pre-wrap`。<br>
优点：保留换行、所有空格；缺点：需要单独加样式。<br>
[white-space 的更多介绍](https://github.com/carolinezhao/front-end-learning/blob/master/css/README.md)

* 在 HTML 需要显示数据的地方用 `<pre></pre>` 标签，其中的文本会保留空格和换行符。pre 标签常用于表示计算机源代码。<br>
缺点：不使用页面设定的字体样式，英文呈现为等宽字体。

[参考](http://dreammoon.iteye.com/blog/2220568)