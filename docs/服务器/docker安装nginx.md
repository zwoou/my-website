---
sidebar_position: 2
---

# docker 安装nginx

## 调整默认配置

```
$ docker run --name tmp-nginx-container -d nginx
$ docker cp tmp-nginx-container:/etc/nginx/nginx.conf /host/path/nginx.conf
$ docker rm -f tmp-nginx-container
```
然后在主机文件系统中编辑 /host/path/nginx.conf 。

## 挂载目录
```bash
docker run --name nginx \
-v /root/app/docker/nginx/html:/usr/share/nginx/html \
-v /root/app/docker/nginx/config/nginx.conf:/etc/nginx/nginx.conf \
-v /root/app/docker/nginx/log:/var/log/nginx \
-p 9090:80 \
--privileged=true -d nginx 
```
