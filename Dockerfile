#Dockefile reference https://docs.docker.com/engine/reference/builder/
#Multistage https://docs.docker.com/develop/develop-images/multistage-build/

#builder
FROM node:10 as builder

RUN npm install -g npm@v6.12.0 @angular/cli@8.3.9

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY  ./ ./
RUN ng build --prod

#web server
FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist/docker-app/ ./

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
