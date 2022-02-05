Git 的学习

快速学习请直接看最后，节约生命。

```
// github提供的终端命令
git remote add origin https://github.com/kongsa-0721/stock.git
git branch -M main
git push -u origin main
```

```
在终端创建本地仓库，连接到远程仓库，上传
(base) kongsadeMacBook-Pro:~ macbookpro$ git --version //查看git 版本
git version 2.21.1 (Apple Git-122.3)
(base) kongsadeMacBook-Pro:~ macbookpro$ cd /Users/macbookpro/Desktop/my-git  //进入文件夹路径
(base) kongsadeMacBook-Pro:my-git macbookpro$ touch index.html  //创建index.html文件
(base) kongsadeMacBook-Pro:my-git macbookpro$ git init  //git 初始化
Initialized empty Git repository in /Users/macbookpro/Desktop/my-git/.git/
(base) kongsadeMacBook-Pro:my-git macbookpro$ git config --global user.name 'kongsa-0721'  //本地账号密码
(base) kongsadeMacBook-Pro:my-git macbookpro$ git config --global user.email 'ks210220364@icloud.com'
(base) kongsadeMacBook-Pro:my-git macbookpro$ git add index.html  //添加到队列
(base) kongsadeMacBook-Pro:my-git macbookpro$ git status  //查看状态
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   index.html

(base) kongsadeMacBook-Pro:my-git macbookpro$ git commit  //上传 首先按i 然后esc 然后：wq 推出
[master (root-commit) 67bc4a2] first commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html
(base) kongsadeMacBook-Pro:my-git macbookpro$ git status  //再次查看状态
On branch master
nothing to commit, working tree clean
//链接远程数据库
(base) kongsadeMacBook-Pro:my-git macbookpro$ git remote add origin https://github.com/kongsa-0721/stock.git
(base) kongsadeMacBook-Pro:my-git macbookpro$ git branch -M main  //本地名字 ，远程名字都改成main
(base) kongsadeMacBook-Pro:my-git macbookpro$ git push -u origin main  //上传到远程 main 分支
Username for 'https://github.com': kongsa-0721  //填写远程账号密码
Password for 'https://kongsa-0721@github.com': git commit
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 214 bytes | 214.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/kongsa-0721/stock.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
(base) kongsadeMacBook-Pro:my-git macbookpro$ git status   //查看状态
On branch main   //在主分支 main
Your branch is up to date with 'origin/main'.   //你的分支是最新的“origin/main”。

nothing to commit, working tree clean   //没有什么要提交的，工作树干净
(base) kongsadeMacBook-Pro:my-git macbookpro$ 




```

```
// 配置本地账户信息
$> git config --global user.name '[name]'
$> git config --gloabl user.email '[email]'

// 初始化项目
$> git init              // 本地初始化一个git 项目
$> git clone [url]          // 克隆一个远程仓库，比如GitHub
$> git remote add origin [url]      // 关联到一个远程仓库 

// 更改保存
$> git add                          // 将所有的改动计入暂存区
$> git commit -m '[desc msg]'       // 将所有更改加入版本历史，并说明
$> git pull             					  // 存远程分支拉取更改
$> git push               			  	// 将本地更改提交到远程仓库

// 分支管理
$> git branch [name]                      // 创建一个分支
$> git checkout [branch-name]             // 切换到另一个分支
$> git merge [branch-name]                // 合并指定分支到当前分支上
$> git branch -d [branch-name]            // 删除一个指定分支
```







## Main 

在vscode里链接远程仓库

这几步不知道是否是必须的，我觉得没有也可以

```
在 vscode 里面下载一个 插件gitee ，然后申请一个私人令牌

3c82ef1114e4117743a807c79adfda0b

按 `F1`, 并输入命令前缀 `Gitee` ，从搜索结果中选择   添加access-token


```

点击vscode 侧边栏第三个，源代码管理，确保是在你的要上传的项目里 ，否则会上传你目录下的所有代码，想要修改只能换个文件夹存放。

选择要上传的文件，点击加号 

ctrl + j 打开终端

输入`git status`  查看你的队列

输入`git commit`  按 i 输入备注 esc退出 ，按：wq 退出

再次查看队列 `git status` 

`git remote add origin https://gitee.com/rust_usth/dust.git`      //链接远程仓库

`git branch -a`   查看你本地的分支和远程的分支 ，红色部分是远程的分支

` git branch -M test_kongsa_0322`     //修改你本地库的名字 

`git pull origin test_kongsa_0322  --allow-unrelated-histories`    这条命令允许了不同项目的合并

`git push -u origin test_kongsa_0322`  //然后直接push 上去

===================================================================

  克隆代码，如果你想从码云上下载代码仓库，执行如下命令：

`git clone https://gitee.com/xxx/xxx.git`

从远程服务器克隆一个一模一样的版本库到本地,复制的是整个版本库，叫做clone.（clone是将一个库复制到你的本地，是一个本地从无到有的过程）
从远程服务器获取到一个branch分支的更新到本地，并更新本地库，叫做pull.（pull是指同步一个在你本地有版本的库内容更新的部分到你的本地库）
git pull相当于是从远程获取最新版本并merge（合并）到本地   git pull = git fetch + git merge，git fetch更安全一些

clone是本地没有repository时，将远程repository整个下载过来。

pull是本地有repository时，将远程repository里新的commit数据(如有的话)下载过来，并且与本地代码merge。



