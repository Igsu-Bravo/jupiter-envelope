FROM node:alpine
WORKDIR /
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn
RUN apk add --no-cache bash
CMD ["yarn", "server:dev", "/bin/bash"]
