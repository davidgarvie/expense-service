# Expense Service

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Allows a client to manage a list of expenses

## Running the app

### With node

```sh
node ci --only=prod
npm run start
```

### With Docker

```sh
docker build -t expenses-service . && docker run --rm -p 8080:8080 expenses-service
```

## Local development

### With Node

```sh
npm install
npm run dev
```

### With Docker 

The application depends on a database so the easiest solution is to run with docker compose. This will run the app and watch for changes in the
 background. 

```sh
docker-compose up --build
```
