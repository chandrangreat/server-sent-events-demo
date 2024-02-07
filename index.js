const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.get("/stream", (req, res) => {
  notifyClient(res);
});

function notifyClient(res) {
  let notificationCount = 1;
  res.setHeader("Content-Type", "text/event-stream");
  setInterval(() => {
    let data = JSON.stringify({
      message: `This is ${notificationCount} notification`,
    });
    message = `data:${data}\n\n`;
    res.write(message);
    notificationCount = notificationCount + 1;
  }, 5000);
}
const port = 3000;
app.listen(port, () => {
  console.log(`Server Sent Event app backend listening on port ${port}.`);
});
