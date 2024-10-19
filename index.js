const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  console.log(req);
  res.send({ message: "Hello world!" });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
