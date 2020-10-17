# ImageApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Note on CORS

- Due to the nature of Chrome and most modern browsers blocking the download of resources outside of your domain, it's recommended you use a chrome extension like Allow CORS for the application to run correctly. If you notice any CORS errors when trying to download images locally, install this plugin: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

## Docker Setup

- cd into `local` folder
- run `docker-compose up -d --build`
- go to `localhost`
- Make sure the api project is running as well. Instructions can be found on that repo.

## Run Without Docker

- run `npm install`
- run `ng s`
- visit `localhost:4200`
- ensure the api is running as well. Instructions can be found on that repo.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
