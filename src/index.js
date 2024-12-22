const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
require("./connections/db");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static("public"));

app.use("/api", require("./routers"));

app.listen(process.env.PORT, function () {
  console.log("Server is listening on port", process.env.PORT);
});
