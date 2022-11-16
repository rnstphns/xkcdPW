const fs = require("fs");
const { join } = require("path");

const WordNetLoc = "dictionaries/WordNet-3.0";
const adjectives = [];
const adverbs = [];
const nouns = [];
const verbs = [];

module.exports.buildDictionary = () => {
  console.log("building dictionary arrays...");
  const adjs =fs.readFileSync(join(__dirname, WordNetLoc, "adjectives.csv"))
  .toString().split('\n').map(e => e.trim())
  for (const adj of adjs){adjectives.push(adj)}
  const advs = fs.readFileSync(join(__dirname, WordNetLoc, "adverbs.csv"))
  .toString().split('\n').map(e => e.trim())
  for (const adv of advs){adverbs.push(adv)}
  const ns = fs.readFileSync(join(__dirname, WordNetLoc, "nouns.csv"))
  .toString().split('\n').map(e => e.trim())
  for (const n of ns){nouns.push(n)}
  const vs = fs.readFileSync(join(__dirname, WordNetLoc, "verbs.csv"))
  .toString().split('\n').map(e => e.trim())
  for(const v of vs){verbs.push(v)}
//   console.log(verbs[100]+nouns[100]+adverbs[100]+adjectives[100])
};

module.exports.getAdjectives = () => {
  return adjectives;
};
module.exports.getAdverbs = () => {
  return adverbs;
};
module.exports.getNouns = () => {
  return nouns;
};
module.exports.getVerbs = () => {
  return verbs;
};
module.exports.getRandomAdjective = () => {
    const randomIndex = Math.floor(Math.random() * adjectives.length)
    return adjectives[randomIndex]
}
module.exports.getRandomAdverb = () => {
    const randomIndex = Math.floor(Math.random() * adverbs.length)
    return adverbs[randomIndex]
}
module.exports.getRandomNoun = () => {
    const randomIndex = Math.floor(Math.random() * nouns.length)
    return nouns[randomIndex]
}
module.exports.getRandomVerb = () => {
    const randomIndex = Math.floor(Math.random() * verbs.length)
    return verbs[randomIndex]
}
