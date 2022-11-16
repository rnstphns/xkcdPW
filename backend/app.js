const express = require("express");
const app = express();
const { generate } = require("./logic");
const dict = require("./dict");
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
  dict.buildDictionary()
  console.log(`words of the day: ${dict.getRandomAdjective()} ${dict.getRandomAdverb()} ${dict.getRandomNoun()} ${dict.getRandomVerb()}`)
  console.log(`app listening on ${PORT}`)
});