Nginx

#### web服务器 :

为用户提供网上信息浏览服务

#### HTTP:

超文本传输协议 用于web服务器传输超文本到本地浏览器的传输协议 也是互联网上应用最为广泛的一种协议 HTTP是一个客户端和服务器请求和应答的标准 客户端是终端用户 服务端是网站 通过web浏览器 网络爬虫 等等 客服端发起一个服务器上指定端口的HTTP请求

Nginx 可以作为电子邮件代理服务器

#### 反向代理

翻墙用的是正向代理 服务的是客服端

反向代理服务的是 服务器 

#### 安装brew

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```



#### Nginx

是一个高性能的HTTP和反向代理服务器，占用内存小 并发能力强 不需要重新启动 

在本机上 vue react项目 打包之后 均可以放上去 很方便

######  1.查看 nginx 版本

nginx -v

###### 2.启动 nginx

sudo nginx

默认8080端口 访问localhost：8080。但是注意 本机设置的是5000端口 为了防止冲突

######  3.关闭nginx

 sudo nginx -s stop

也可以使用下面的命令启动，但是配置文件nginx.conf修改后用这个命令执行不生效，故不建议使用：

sudo brew services stop nginx

###### 4.重新加载nginx

sudo nginx -s reload

```nginx
#这是跨域的配置 在vue.config.js 中所定义的 映射到这里      
					location /api{
            rewrite  ^.+api/?(.*)$ /$1 break;
            proxy_pass  http://121.36.4.107:8080/Rust;
            proxy_redirect off;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;

        }
```

###### 5.目录

本地的nginx项目目录 ‎⁨Macintosh HD⁩ ▸ ⁨usr⁩ ▸ ⁨local⁩ ▸ ⁨Celler ▸ nginx ▸ 1.21.3 ▸html

配置目录Macintosh HD⁩ ▸ ⁨usr⁩ ▸ ⁨local⁩ ⁩ ▸ ⁨etc⁩ ▸ ⁨nginx

当配置宝塔面板时 要注意项目目录的存放位置 注意端口是否放行

​        listen       监听的端口号

​        server_name  服务器名字

​		root        项目目录

###### 注意格式 很严格 分号

如果格式不正确 很容易发生错误

#### 正向代理与反向代理

###### 正向代理 

vpn 代理服务器帮我请求  跳板 代理客户端的

###### 反向代理 

代理服务器端

#### 负载均衡

###### 负载均衡策略

​						轮询     			默认方式

​						加权轮询    	 权重方式

​						 ip hash ：	固定的打到特定的服务器上 依据ip分配

​						least_conn  		依据最少的链接方式

​						url_hash  			依旧url 分配方式

​						fair 					  依据响应时间方式

###### 负载均衡状态 

​							down           当前的server暂时不参与负载均衡

​						   backup		预留的备份服务器

​							max_fails	允许请求失败的次数

​							fail_timeout	经过max_fails后 服务器暂停的时间

​							max_conns	限制最大的链接数量数

```nginx
    #负载均衡
    #在配置负载均衡的时候 server里只放域名+端口号 不可以放额外的路径 路径可以拼接在跨域路径后面 
    upstream backend{
  				ip_hash
        #server 121.36.4.107:8080 weight=1;
 				 server 121.36.4.107:8080;
    }
    server {
        listen       5000;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
        }
        location /api{
           include uwsgi_params;
           proxy_set_header   Host             $host;
           proxy_set_header   x-forwarded-for  $remote_addr;
           proxy_set_header   X-Real-IP        $remote_addr;
           proxy_pass  http://backend/Rust;
        }
    }

```

###### 宝塔面板的nginx主要配置 

配置好 端口号 服务器名 资源目录 跨域问题 

```nginx
server
    {
        listen 888;  //监听的端口号
        server_name phpmyadmin;
        index index.html index.htm index.php;
        root  /www/wwwlogs/dist;    //资源目录
            location ~ /tmp/ {
                return 403;
            }
    #error_page   404   /404.html;
    include enable-php.conf;
    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    {
        expires      30d;
    }
    location ~ .*\.(js|css)?$
    {
        expires      12h;
    }

    location ~ /\.
    {
        deny all;
    }
      
      //这里是配置 跨域 
      location /api{
       include uwsgi_params;
       proxy_set_header   Host             $host;
       proxy_set_header   x-forwarded-for  $remote_addr;
       proxy_set_header   X-Real-IP        $remote_addr;
       proxy_pass  http://121.36.4.107:8080/Rust;
    }

   access_log  /www/wwwlogs/access.log; //日志存放位置
}
```

























