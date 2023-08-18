const express = require("express");
const app = express();
const port = 3000;
const locations = {};

app.use(express.json()); // for parsing application/json
app.post("/set_location", (req, res) => {
  if (req.body.lat && req.body.long && req.body.email) {
    let email = req.body.email;
    let long = req.body.long;
    let lat = req.body.lat;
    locations[email] = {
      lat,
      long,
    };
    console.log(locations);
    res.send("success");
  } else {
    res.status(400).send("wrong request");
  }
});

app.get("/get_location/:email", (req, res) => {
  if (locations[req.params.email]) {
    res.send(locations[req.params.email]);
  } else {
    res.status(404).send("not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
