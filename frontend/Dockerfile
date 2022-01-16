FROM node:alpine

# These are used for prod builds, use docekr create ... -e REACT_APP_API_PATH=/api/v1 for dev stuff
ARG REACT_APP_API_HOST=${REACT_APP_API_HOST}
ENV REACT_APP_API_HOST=$REACT_APP_API_HOST

ARG REACT_APP_API_PORT=${REACT_APP_API_PORT}
ENV REACT_APP_API_PORT=$REACT_APP_API_PORT

ARG REACT_APP_API_PATH=${REACT_APP_API_PATH}
ENV REACT_APP_API_PATH=$REACT_APP_API_PATH

WORKDIR /src
COPY package.json ./
COPY ./ ./
ENV NODE_OPTIONS="--openssl-legacy-provider"
RUN yarn
CMD ["yarn", "run", "craco", "start"]