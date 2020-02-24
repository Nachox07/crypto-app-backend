# crypto-app-backend

## Quick introduction

This repository contains a Node.js app that acts as a backend service with a restful API and WebSockets. It can be used with this UI https://github.com/Nachox07/crypto-app-frontend in order to visualize the changes and data. The tech stack used is the following:

-   Express with Typescript
-   MongoDB as NoSQL database
-   Celebrate and Joi for request validation and error handling
-   Socket.io as websocket server

## Installation

Firstly all the dependencies need to be installed, as this is a JS project `node` is necessary plus a dependency installer, the preference here is `yarn`

Once these tools are installed you need to run on the project folder for dependencies installation:

`yarn`

MongoDB is an important dependency and it needs to run as a local service, here are the docs https://docs.mongodb.com/manual/installation/

Once it is running DB needs to be populated to show some data by using:

`yarn db:generate`

Now we can check if the population was succeeded by doing a simple query on the new db created `crypto-app-db-development` on the `accounts` collection like this:

`$ use crypto-app-db-development`

`$ db.accounts.find({})`

For data structure reference, please check the types on `src/accounts/types.ts`

## Running the app

The app can be running in two different environment, the domain and port will be `http://localhost:8080`.

### Development mode

Nodemon will be pending of file changes and it will reload the app.

`yarn server:dev`

### Production mode

App is compiled to ES5 and it starts running.

`yarn server`

## Testing

### Types

`yarn test:types`

### e2e

The testing is performed for now by the Cypress suites included on the Frontend project mentioned above
