const express = require("express");
const axios = require("axios");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", function (req, res) {
  res.send("Shuttle API");
});

app.get("/locations", function (req, res) {
  axios
    .get(
      "http://andysbuses.com/Services/JSONPRelay.svc/GetMapVehiclePoints?ApiKey=8882812681"
    )
    .then((res1) => {
      console.log(res1);
      res.send(res1.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error");
    });
});

app.listen(port, () => console.log(`App listening on port ${port}.`));
// localhost:port