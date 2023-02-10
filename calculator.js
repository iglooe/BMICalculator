// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var result = weight / height ** 2;
  var resultRounded = result.toFixed(2);

  res.send(`Your BMI is ${resultRounded}`);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
