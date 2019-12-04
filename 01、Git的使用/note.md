#### 一、什么是Git
> Git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。版本控制是指对软件开发过程中各种程序代码、配置文件及说明文档等文件变更的管理。

#### 二、安装Git
- ##### 直接在Git官网[下载安装程序](https://git-scm.com/downloads)，然后按照默认选项安装即可；
- ##### 安装完成后，在开始菜单里找到Git Bash，点击会弹出一个类似命令行窗口的东西，说明Git安装成功；
- ##### 在命令行输入
    ```
        $ git config --global user.name "Your Name"
        $ git config --global user.email "email@example.com"
    ```
注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

#### 三、创建版本库：git init
- ##### 在本机选择一个合适的地方，创建一个空目录，可以手动创建，也可以直接通过命令行
    
    ```
        $ mkdir git-test（先进入目标目录之后，再使用该命令创建）
        $ cd git-test
        $ pwd（pwd命令用于显示当前目录，我的位置是/d/git-test）
    ```
- ##### 通过git init命令将这个目录变成Git可以管理的仓库：
    
    ```
        $ git init
        创建仓库，并告知是一个空仓库Initialized empty Git repository in /d/git-test/.git/
    ```
#### 四、添加文件到Git仓库（两步）
- ##### 添加文件到暂存区stage
    ```
        比如在git-test目录下中添加了一个文件test.txt后，使用git add命令将文件添加到仓库：
        
        $ git add test.txt
    ```

- ##### 把暂存区的所有内容提交到当前分支（Git自动创建第一个分支master，以及指向master的指针HEAD）
    ```
        $ git commit -m "add a new file"
        
        -m后面是本次提交的说明，最好每次commit的时候都添加该说明，并且保证其有意义，
        这样可以方便查找改动记录，提高阅读性
    ```
#### 五、版本回退：git reset --hard 版本号

- ##### 查看提交日志（按时间倒序）
    
    ```
        $ git log
    ```
    查询到的提交历史记录：
    ```
        commit 76a12e32fea17e3b74a19819855fd404ca57eebe (HEAD -> master)
        Author: Alice-daily <jjyou@iflytek.com>
        Date:   Wed Dec 4 14:15:49 2019 +0800
        
            add content
        
        commit 1e38e1ed3cbaa46f14e1d108b43b249d479fcae7
        Author: Alice-daily <jjyou@iflytek.com>
        Date:   Wed Dec 4 14:14:41 2019 +0800
        
            add a new file

    ```
    如果觉得使用git log查询到的信息太多了，可以加上--pretty=oneline参数
    ```
        $ git log --pretty=oneline
    ```

    ```
    76a12e32fea17e3b74a19819855fd404ca57eebe (HEAD -> master) add content
    1e38e1ed3cbaa46f14e1d108b43b249d479fcae7 add a new file
    ```
    返回的历史记录中，一大串类似76a12e32...这种的是版本号(commit id)

- ##### 确定要回退的版本

    ```
        在Git中使用HEAD表示当前版本，上一个版本就是HEAD^、上上一个版本就是HEAD^^，往上100个版本就是HEAD~100
    ```

- ##### 回退到历史版本
     ```
        $ git reset --hard HEAD^
        HEAD is now at 1e38e1e add a new file
        
        $ git log --pretty=oneline
        1e38e1ed3cbaa46f14e1d108b43b249d479fcae7 (HEAD -> master) add a new file
    ```
使用git log查看历史记录，发现最新版本的记录也没有了，此时打开test.txt发现已被还原到上一个版本
- ##### 后悔药：还原之后后悔了，需要再回到回退之前的版本

    ```
        $ git reflog
        1e38e1e (HEAD -> master) HEAD@{0}: reset: moving to HEAD^
        76a12e3 HEAD@{1}: commit: add content
        1e38e1e (HEAD -> master) HEAD@{2}: commit (initial): add a new file
    ```
    使用git reflog可以查询使用过的每一个命令的记录，从查询结果可以发现"add content"的版本号为76a12e3

    ```
        $ git reset --hard 76a12e3
    ```

此时回到了回退之前的版本

#### 六、远程仓库
- ##### 添加远程库
    1）关联远程库
    ```
        $ git remote add origin https://github.com/Alice-daily/beginner.git
    ```
    2）关联后，第一次推送时，需要把master分支的所有内容推送到远程仓库

    ```
        $ git push -u origin master
    ```

    3）此后，每次本地提交后，只要有必要，就可以使用下面的命令推送最新修改

    ```
        $ git push origin master
    ```

- ##### 从远程库克隆

    ```
    $ git clone https://github.com/Alice-daily/beginner.git
    ```
