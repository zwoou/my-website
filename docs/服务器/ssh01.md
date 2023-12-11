---
sidebar_position: 2
---

# ssh配置密钥登录

## .ssh/里面的文件作用解释

id_rsa ：私钥，别台机器想登录你，你就把私钥发给它
id_rsa.pub ：为公钥，你想登录别台机器，你就把公钥发给他，并叫他安装到authorized_keys
authorized_keys： 里面记录了服务器授权的所有公钥
known_hosts：ssh会把你每个你访问过计算机的公钥(public key)都记录在~/.ssh/known_hosts。当下次访问相同计算机时，OpenSSH会核对公钥。如果公钥不同，OpenSSH会发出警告， 避免你受到DNS Hijack之类的攻击。

## 配置ssh服务端

1. 使用vim修改/etc/ssh/sshd_config 文件

```bash
RSAAuthentication yes
PubkeyAuthentication yes
```

2. 重启 SSH 服务

```sh
sudo service sshd restart
```

## 生成密钥对

```sh
ssh-keygen
```

## 在服务器上安装公钥

首先进入 /home/username/.ssh/，如果没有./ssh，那就创建；如果没有id_rsa.pub，那就上传到该目录。
然后在命令行输入以下命令安装公钥，其实就是将id_rsa.pub的内容添加到authorized_keys

```sh
cd ~/.ssh
cat id_rsa.pub >> authorized_keys
```

命令意思：
对于安装好的公钥authorized_keys， 让当前用户具有读写权限，其余用户没有任何权限，以防被人修改，当前用户就登录不了了。
对.ssh目录，让当前用户具有可读可写可执行权限，其余用户没有任何权限，确保ssh正常工作。

## 报错解决

1. Permissions 0644
2. 错误信息：
   Permissions 0644 for ‘/home/xxxx/.ssh/my_id_rsa’ are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
解决办法：
按照错误提示，意思是：my_id_rsa这个文件太开放了，要求私钥文件不能被其他人访问。
所以只要将所属组和其他人的read权限取消即可。
0644其实就是表示my_id_rsa这个文件的权限是644，要变得不那么open，那就把权限设成600，

```sh
chmod 600 my_id_rsa
```
