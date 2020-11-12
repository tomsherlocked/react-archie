require("dotenv").config();
const express = require("express"),
  app = express(),
  http = require("http"),
  launcher = require("rocket-server-log"),
  bodyParser = require("body-parser"),
  fetch = require("node-fetch"),
  auth = require("express-basic-auth"),
  PORT = process.env.PORT || 8080,
  baseAPIRoute = process.env.BASE_ROUTE;
(toiletRoute = process.env.TOILET), (weightRoute = process.env.WEIGHT);

app.use(express.static(__dirname + "/build"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/toilet", async (req, res) => {
  console.log(req.body);
  if (req.body.type && req.body.target) {
    const response = await fetch(`${baseAPIRoute}/${toiletRoute}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
  }
});
app.post("/weight", async (req, res) => {
  if (req.body.weight) {
    const response = await fetch(`${baseAPIRoute}/${weightRoute}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(400); // oopsie
  }
});
// create server
const server = http.createServer(app);

server.listen(PORT, function () {
  launcher(PORT);
});
