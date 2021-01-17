FROM nginx
COPY ./dist/my-dream-app/* /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/nginx.conf
