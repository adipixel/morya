const express = require("express");
const path = require("path");
fs = require("fs");
const app = express();
const port = 5000;

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/data", (req, res) => {
  let rawdata = fs.readFileSync("database.json");
  res.json(JSON.parse(rawdata));
  // res.json({ message: "Hello from server!" });
});
app.post("/api/data", (req, res) => {
  if (req.header("x-passcode") !== "prasad123") {
    res.json({ message: "Incorrect passcode!" });
  } else {
    fs.writeFile("database.json", JSON.stringify(req.body), function (err) {
      if (err) return console.log(err);
    });
    res.json({ message: "Data saved to server!" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
