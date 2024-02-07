# Server Sent Events Demo application

This application is to demonstrate how to use Server Sent Events. You can also understand the number of simultanous open connections that can be open from a client to the same server. You can run the server and open as many clients as you want.

## Run Backend

- Use NodeJS version above 16 preferably.
- Run `npm install` command inside the repo after cloning.
- Run command `npm start` to run the server.

## Run Frontend

- Install [live-server](https://www.npmjs.com/package/live-server) or any other static server.
- The static files (index.html and script.js) are in the `website` directory.
- If using live-server, you can run live-server from `website` directory.
- #### You can run live-server in different terminal tabs to simulate the scenario of the max six simultaneous connections in Chrome.
