## 下载

在 [MongoDB 官网](https://www.mongodb.com/) 下载 Community 版本

## 安装

[参考1](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

[参考2](http://www.runoob.com/mongodb/mongodb-osx-install.html)

把解压后的文件夹放在目标路径下 `~/Workplace/mongodb`。文件结构：

    mongodb
        ├── 4个其他文件
        └── bin
            └── 可执行文件们

## 配置

The MongoDB binaries are in the bin/ directory of the archive. To ensure that the binaries are in your PATH, you can modify your PATH. 

只有把路径添加到 PATH 变量中才能全局使用，否则在其他终端窗口中不可用，或在不同文件目录下也不可用。

两种检查方法

查看 PATH 变量包含哪些路径，返回的结果是以冒号分隔的路径，比如 `/usr/local/bin:/usr/bin:/bin:...`，如果不包含目标路径则需要手动添加。

    $ echo $PATH

查看路径是否包含在 PATH 变量中，返回 `not found` 则需要手动添加该路径。

    $ which mongo

--

添加路径

在 rc 文件中手动添加路径，如果是 bash 终端，则 `$ open ~/.bashrc` 修改；如果是 zsh 终端，则 `$ open ~/.zshrc` 修改。各终端只读取自己的文件。用实际路径替换其中的 `<directory>`，查看所在路径 `$ pwd`。

`export PATH=<directory>/bin:$PATH`

添加后以下命令使其立即生效，或者新开一个终端窗口 (自动执行 source)。如果修改了 .bashrc 文件，使用 zsh 终端打开，则必须手动执行该命令。

    $ source ~/.zshrc

确认是否添加成功，若成功则返回所在路径 `.../mongodb/bin/mongo`

    $ which mongo

## 数据目录

By default, the mongod process uses the `/data/db` directory.<br>
也可以使用其他路径，需要手动配置，见文档。<br>
以 `/` 开头意味着在 root 目录下创建文件，需要加 `sudo`。

    $ sudo mkdir -p /data/db

## 启动

To run MongoDB, run the mongod process at the system prompt.<br>
使用 mongod 也需要加 `sudo`。

    $ sudo mongod

看到打印以下语句则说明成功启动

`[initandlisten] waiting for connections on port 27017`

## 连接

Start a mongo shell on the same host machine as the mongod. Use the --host command line option to specify the localhost address and port that the mongod listens on.

在新窗口中执行此命令，因为刚才的命令是持续运行的。

    $ mongo --host 127.0.0.1:27017

To stop MongoDB, press `Control+C` in the terminal where the mongod instance is running.

## 操作

显示实例/集合

    show dbs
    show collections

进入实例 (也就是一个项目)

    use microblog

查看已创建的集合中的内容

    db.users.find()
    db.posts.find()

删除集合中的内容

    db.users.drop()
    db.posts.drop()

## 项目

数据库 db: 'microblog' 和 host: 'localhost' 是写在 settings 文件中的。
数据库如何读取？