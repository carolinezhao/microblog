## 点击发布微博到页面展示微博，中间经历了哪些过程？

post.js
* 定义 Post.get 方法读取数据库中的 posts 集合，拿到所有已发布微博组成的对象 posts。

index.js
* 通过 post.js 引入 Post 模型；
* 首页路由是 “/”，get 方法中，调用 Post.get，第一个参数为 null，获取到 posts 对象数组包含全部用户发布的微博；
* 用户个人页面的路由是 “/u/:user”，get 方法中，调用 Post.get，传入用户名参数，获取到 posts 对象数组仅包含该用户的微博。
* 渲染的模板分别是 index.ejs 和 user.ejs，两者都引入了 posts.ejs。

posts.ejs
* 模板中的 posts 变量将渲染为 posts 对象。

--

Q：为什么这几年模板用的不多了？
A：因为 ES6 实现了在字符串内插入表达式然后渲染到页面，这就是模板的作用。

todo：看 render 的源码

<br>

## 用到的与数组有关的方法

sort 重排序方法
* 把微博按时间倒序排列 (post.js)

forEach 迭代方法，默认向迭代函数中传入数组元素位置 index
* 读取 docs 中的值写入 Post 对象 (post.js)
* 读取 posts 中的值渲染到页面 (posts.ejs)

push 栈方法
* 把新创建的 post 对象加到 posts 数组中 (post.js)

<br>

## post.js 中数据库相关内容

line 98
```js
console.log(collection.find(query))
```
返回 `Cursor {}` [内容见文件]()

[Cursor 文档1.4.9](https://mongodb.github.io/node-mongodb-native/api-generated/cursor.html)

Constructor for a cursor object that handles all the operations on query result using find. 

[Cursor 文档3.0](http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html)

cursor options: 跟在 find() 后面的方法，比如 sort。
All options are chainable. 比如下面这个用法：

```js
console.log(collection.find(query).sort({time: -1}).toArray())
```
返回 `Promise { <pending> }`

[toArray(callback)](http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html#toArray)
* Returns an array of documents.
* Returns: Promise if no callback passed.

line 107
```js
console.log(docs)
```
返回
```
[ { _id: 5acb8b199e9b7dfd2b61db58,
    user: 'bear',
    post: '微博内容',
    time: 2018-04-09T15:47:37.566Z },
  { _id: 5acb8a0c9e9b7dfd2b61db56,
    user: 'caroline',
    post: '微博内容',
    time: 2018-04-09T15:43:08.845Z } ]
```