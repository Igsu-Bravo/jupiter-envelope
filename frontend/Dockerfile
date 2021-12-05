FROM node:alpine
WORKDIR /src
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
ENV NODE_OPTIONS="--openssl-legacy-provider"
RUN yarn
CMD ["yarn", "run", "craco", "start"]