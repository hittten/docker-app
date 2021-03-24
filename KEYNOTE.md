# Docker, Kubernetes & openshift course

## Keynote

- Introducción a la tecnología de contenedores
- Creación de servicios en contenedores
- Gestión de contenedores
- Gestión de imágenes de contenedores
- Creación de imágenes de contenedor personalizadas
- Kubernetes
- Implementación de aplicaciones en contenedores con OpenShift
- Revisión completa

## Docker

Accelerate how you build, share and run modern applications

- [Docker for Windows release notes](https://docs.docker.com/docker-for-windows/release-notes/)
- [What is a Container?](https://www.docker.com/resources/what-container)
- [Docker overview](https://docs.docker.com/engine/docker-overview/)
- [Docker reference](https://docs.docker.com/reference/)
- [Get Started with Docker](https://www.docker.com/get-started)

---

### Docker engine

- [Docker architecture](https://docs.docker.com/get-started/overview/#docker-architecture)

#### Demo

- Play with `docker run -i -t ubuntu /bin/bash`
- Try to install something, and rerun the container
- Learn about what happened.
- Now with some volume and port:
    * PowerShell `docker run --rm -p 80:80 -v ${pwd}:/usr/share/nginx/html/ nginx`
    * Bash `docker run --rm -p 80:80 -v $(pwd):/usr/share/nginx/html/ nginx`
- Remove all containers: `docker rm $(docker ps -aq)`
- Manage images: `docker image`
- Run containers: `docker run`
- Pull images: `docker pull`

#### Installation

- [System Requirements](https://docs.docker.com/docker-for-windows/install/#system-requirements)
- [Get Started with Docker](https://www.docker.com/get-started)
- [Play with Docker](https://www.docker.com/play-with-docker)

---

### Dockerfile

- [Reference](https://docs.docker.com/engine/reference/builder/)

#### Items

- FROM
- RUN
- WORKDIR
- COPY
- EXPOSE
- CMD
- ENV
- VOLUME

#### Demo

move to demo `./move/to.sh dockerfile`

- Build `docker build --rm -t docker-app .`
- Run `docker run --rm -p 80:80 --name my-app docker-app`
- Entry into the container `docker exec -it my-app /bin/bash`
- Run with volume (for developers):
    * PowerShell `docker run --rm -p 80:80 -v ${pwd}:/usr/share/nginx/html/ --name my-app docker-app`
    * Bash `docker run --rm -p 80:80 -v $(pwd):/usr/share/nginx/html/ --name my-app docker-app`

#### Hands On

Dockerize front npm App: move to practice `./move/to.sh dockerize`

- Install dependencies `npm install`
- Build app `npm run build`
- Public files `dist/docker-app`
- Run app `npm start`
- Run app all interfaces `npm start -- --host 0.0.0.0`

Solution: `./move/to.sh dockerize-solution`
