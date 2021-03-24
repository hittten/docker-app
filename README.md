# DockerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Work with Docker

### Production image

- Build `docker build --rm -t docker-app .`
- Run `docker run --rm -p 80:80 --name my-app docker-app`
- Entry `docker exec -it my-app /bin/bash`
- Publish `docker login` and `docker push USER/docker-app:TAG`

### For developers
- Build `docker build --rm --target builder -t docker-app .`
- Run
  * PowerShell `docker run --rm -p 4200:4200 -v ${pwd}:/app -v /app/node_modules --name my-app docker-app`
  * Bash `docker run --rm -p 4200:4200 -v $(pwd):/app -v /app/node_modules --name my-app docker-app`
