# J U P I T E R

> _this is a vörk in progress_ 🥴🥴

This project was _partly_ bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Development setup

I used Yarn Workspaces to simplify dependencies... _for now_

Make sure you're on the right Node version:

```console
$ nvm use
```

Install them dependencies:

```console
$ yarn install
```

Run both frontend and backend with one command:

```console
$ yarn start
```

Runs the frontend and the backend in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Docker development

### Docker compose

Make a copy of `env-sample` and fill in the details as you like.

Run `docker compose up --build` and you'll have the full stack (MongoDB, mongo-express, frontend and backend).

Frontend at `http://localhost:3000`

DB admin UI at `http://localhost:8081`

### Frontend container

Build the frontend image:

```console
$ cd frontend
$ docker build . -t jupiter/frontend
```

Create a container and start the container:

```console
$ docker create --name frontend -p 3000:3000 jupiter/frontend && docker start frontend
```

You should be able to see the app at `http://localhost:3000`. Follow the same steps for backend if you want the containerized version only.
