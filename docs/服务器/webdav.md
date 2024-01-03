---
sidebar_position: 2
---
# ubuntu下webdav客户端

## 安装davfs2工具

```
sudo apt-get install davfs2
```

## 配置davfs2

在终端中输入以下命令来编辑davfs2的配置文件：

```
sudo gedit /etc/davfs2/davfs2.conf
```

在文件末尾添加以下内容：

```
use_locks 0
```

## 挂载WebDav

```
sudo mount -t davfs http://yourwebdavurl /mnt/webdav
```

## 卸载WebDav

```
sudo umount /mnt/webdav
```
