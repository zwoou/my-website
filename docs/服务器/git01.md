

# git 设置代理

全局设置（不推荐）

#使用http代理 
git config --global http.proxy http://127.0.0.1:58591
git config --global https.proxy https://127.0.0.1:58591
#使用socks5代理
git config --global http.proxy socks5://127.0.0.1:51837
git config --global https.proxy socks5://127.0.0.1:51837

只对Github代理（推荐）

#使用socks5代理（推荐）
git config --global http.https://github.com.proxy socks5://127.0.0.1:51837
#使用http代理（不推荐）
git config --global http.https://github.com.proxy http://127.0.0.1:58591
取消代理
当你不需要使用代理时，可以取消之前设置的代理。

git config --global --unset http.proxy git config --global --unset https.proxy

## 设置ssh代理（终极解决方案）

到C:\Users\your_user_name\.ssh目录下，新建一个config文件（无后缀名）
将下面内容加到config文件中即可，对于windows用户，代理会用到connect.exe，你如果安装了Git都会自带connect.exe，如我的路径为C:\APP\Git\mingw64\bin\connect