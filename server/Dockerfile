FROM node:alpine
ENV BACKEND_PORT=$BACKEND_PORT
ENV BACKEND_HOST=0.0.0.0
WORKDIR /
COPY package.json ./
COPY ./ ./
RUN yarn
RUN apk add --no-cache bash
CMD ["yarn", "server:dev", "/bin/bash"]
