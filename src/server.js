const express = require("express");
const { createDBConnection, configureMiddleware } = require("./utils");

const app = express();
createDBConnection();
configureMiddleware(app);

exports.app = app;
