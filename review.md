## 点击发布微博到页面展示微博，中间经历了哪些过程？

post.js
定义 Post.get 方法读取数据库中的 posts 集合，拿到所有已发布微博组成的对象 posts。

index.js
通过 post.js 引入 Post 模型；
首页路由是 “/”，get 方法中，调用 Post.get，第一个参数为 null，获取到 posts 对象数组包含全部用户发布的微博；
用户个人页面的路由是 “/u/:user”，get 方法中，调用 Post.get，传入用户名参数，获取到 posts 对象数组仅包含该用户的微博。
渲染的模板分别是 index.ejs 和 user.ejs，两者都引入了 posts.ejs。

posts.ejs
模板中的 posts 变量将渲染为 posts 对象。

--
为什么这几年模板用的不多了？
因为 ES6 实现了在字符串内插入表达式然后渲染到页面，这就是模板的作用。

todo：看 render 的源码

## 用到的与数组有关的方法

sort 重排序方法
* 把微博按时间倒序排列 (post.js)

forEach 迭代方法
* 读取 docs 中的值写入 Post 对象 (post.js)
* 读取 posts 中的值渲染到页面 (posts.ejs)

push 栈方法
* 把新创建的 post 对象加到 posts 数组中 (post.js)