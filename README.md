# Docker app

## Build
`docker build --rm -t hittten/docker-app .`

## Run
`docker run -p 80:80 --name docker-app hittten/docker-app`

## Entry into the container
`docker exec -it docker-app /bin/bash`

## Remove all containers   
`docker rm $(docker ps -aq)`

## Run for developers
`docker run --rm -p 80:80 -v $(pwd):/usr/share/nginx/html/ --name docker-app hittten/docker-app`
