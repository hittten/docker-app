#Dockefile reference https://docs.docker.com/engine/reference/builder/
#Multistage https://docs.docker.com/develop/develop-images/multistage-build/
#Best practices https://docs.docker.com/develop/develop-images/dockerfile_best-practices/

#builder
FROM node:14 as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY  ./ ./
RUN npm run build --prod

EXPOSE 4200

CMD npm start -- --host 0.0.0.0

#web server
FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist/docker-app/ ./

EXPOSE 80
