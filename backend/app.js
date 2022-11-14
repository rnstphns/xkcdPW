const express = require("express");
const app = express();
const { generate } = require("./logic");
const { buildDictionary } = require("./dict");
const PORT = 3000;

app.get("/", express.json(), generate);

app.all("*", (req, res, next) => {
  res.status(404);
  const route = req.url;
  next(new Error(`Route \'${route}\' not found`));
});

app.use((err, req, res, next) => {
  res.json({ success: false, error: err.message });
});

app.listen(PORT, function(){
  buildDictionary()
  console.log(`app listening on ${PORT}`)
});

app.on("close", () => {
  //close db connection
});
