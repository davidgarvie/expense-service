FROM node:12.18.3-alpine3.9

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --no-scripts

COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev" ]
