FROM node:alpine
WORKDIR /
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn
CMD ["yarn", "server:dev"]
