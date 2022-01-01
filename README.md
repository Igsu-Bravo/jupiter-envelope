# J U P I T E R

> _this is a vörk in progress_ 🥴🥴

This project was _partly_ bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Development setup

Run both frontend and backend with one command:

```bash
$ yarn start
```

Runs the frontend and the backend in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Docker WIP

### Docker compose

Make a copy of `env-sample` and fill in the details as you like.

Run `docker compose up --build` will spawn a MongoDB server and an admin UI at `http://localhost:8081`

### Frontend container

Build the frontend image:

```bash
$ cd frontend
$ docker build . -t jupiter/frontend
```

Create a container and start the container:

```bash
$ docker create --name frontend -p 3000:3000 jupiter/frontend && docker start frontend
```

You should be able to see the app at `http://localhost:3000`
