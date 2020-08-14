# Expense Service

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Allows a client to manage a list of expenses

## Running the app

Note, the app depends on a mongo database being available. To get started, copy the template from `.env.example` into a file named `.env` and update with the appropriate values.

### Local development

The easiest way to get the app running is with docker compose. This will run a mongo database service and restart the application when it detects any changes in any of the source files. 

```sh
docker-compose up --build
```
