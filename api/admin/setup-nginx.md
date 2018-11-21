# NGINX Setup

To get Directus working on NGINX servers all you need to do is ensure that traffic is routed to the correct files. 
Provided that you have api in `/var/www/directus/api` and the app in `/var/www/directus/app` below are some sample configurations:

### `directus.conf`

```
server {
    listen 80;
    server_name api.example.com;

    root /var/www/directus/api/public;

    location / {
        gzip                on;
        sendfile            on;
        keepalive_timeout   60;
        default_type        application/octet-stream;

        client_max_body_size 100M;

        try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
        include /etc/nginx/fastcgi_params;
        fastcgi_pass   unix:/var/run/php5-fpm.sock;
        fastcgi_split_path_info ^(.+\.php)(/.*)$;
        fastcgi_param SCRIPT_FILENAME /var/www/directus/api/public/index.php;
        fastcgi_param DOCUMENT_ROOT   /var/www/directus/api/public;
        internal;
    }
}

server {
    listen 80;
    server_name cms.example.com;

    root /var/www/directus/cms/app;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ @rewrites;
    }
        
    location @rewrites {
        rewrite ^(.+)$ /index.html last;
    }

    location ~ /\.ht {
        deny  all;
    }
    
    location ~* \.(?:ico|css|js|gif|jpe?g|png|json)$ {
        expires max;
        add_header Pragma public;
        add_header Cache-Control "public, must-revalidate, proxy-revalidate";
    }
}
```
