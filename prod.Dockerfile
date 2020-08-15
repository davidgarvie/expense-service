FROM node:12.18.3-alpine3.9

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=prod


COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
