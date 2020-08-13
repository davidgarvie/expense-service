const express = require("express");
const app = express();

app.use("/", (req, res) => res.send("hello"));

app.listen("8080", () => {
  console.log("App running on 8080");
});
