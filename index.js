const express = require("express");
const path = require("path");
fs = require("fs");
var cors = require("cors");
const { response } = require("express");
const app = express();
const port = 8080;

// app.use(cors());
app.set("port", process.env.PORT || 5000);
app.use(express.static(path.resolve(__dirname, "./build")));
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

// ------------------------ SSE -----------------
const customCors = cors();
const publishers = {};

// function sendEventsToAll(newFact) {
//   clients.forEach((client) =>
//     client.response.write(`data: ${JSON.stringify("Gotcha")}\n\n`)
//   );
// }

// Add publisher
app.post("/api/register-publisher", async (req, res) => {
  const publisherId = Date.now();

  publishers[publisherId] = {
    id: publisherId,
    subscriptions: {},
    curUrl: "",
  };

  res.json({ message: "Publisher created", publisherId });
});

// Update subscribed URL
app.post("/api/publisher-update", customCors, async (request, respsonse) => {
  const { publisherId, url } = request.body;

  if (!publisherId || !url) {
    response.json({ message: "Invalid publisher id or url" });
    return;
  }

  const publisher = publishers[publisherId];
  publisher.curUrl = url;

  for (const subscriberId in publisher.subscriptions) {
    publisher.subscriptions[subscriberId].response.write(
      `data: ${JSON.stringify({ url })}\n\n`
    );
  }
});

// SSE - Subscribe to publisher
function eventsHandler(request, response) {
  const publisherId = request.params.publisherId;

  if (!publisherId) {
    return;
  }

  if (!publishers.hasOwnProperty(publisherId)) {
    response.json({ message: "Invalid publisher id" });
    return;
  }

  response.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  });

  const subcriberId = Date.now();
  publishers[publisherId].subscriptions[subcriberId] = {
    response,
  };

  const data = `data: ${JSON.stringify({
    id: publisherId,
    message: "Publisher updated",
    url: publishers[publisherId].curUrl,
  })}\n\n`;

  response.write(data);

  request.on("close", () => {
    delete publishers[publisherId].subscriptions[subcriberId];
    console.log(`${subcriberId} Connection closed`);
  });
}

app.get("/api/events/:publisherId", customCors, eventsHandler);

// ------------------------ SSE end-----------------

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
