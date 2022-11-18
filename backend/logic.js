const dict = require("./dict");

randomWord = (type) => {
  //   console.log(`recieved type ${type}`);
  switch (type) {
    case "adjective":
      return dict.getRandomAdjective();
    case "adverb":
      return dict.getRandomAdverb();
    case "noun":
      return dict.getRandomNoun();
    case "verb":
      return dict.getRandomVerb();
    case "undefined":
      return wordFromRandomTable();
    default:
      return wordFromRandomTable();
  }
};

wordFromRandomTable = () => {
  const table = Math.floor(Math.random() * 4);
  //   console.log(table);
  switch (table) {
    case 0: {
      //   console.log(`random adjective`);
      return dict.getRandomAdjective();
    }
    case 1: {
      //   console.log(`random adverb`);
      return dict.getRandomAdverb();
    }
    case 2: {
      //   console.log(`random noun`);
      return dict.getRandomNoun();
    }
    case 3: {
      //   console.log(`random verb`);
      return dict.getRandomVerb();
    }
    default: {
      //   console.log(`default random dictionary case reached`);
      return dict.getRandomNoun();
    }
  }
};

assembleRandomPass = (numWords, charLimit, seperator, camelCase) => {
  let password = "";
  for (let index = 0; index < numWords; index++) {
    let random = randomWord();
    if (camelCase === "true") {
      firstLetter = random.charAt(0);
      let firstLetterCap = firstLetter.toUpperCase();
      let remainingLetters = random.slice(1);
      random = firstLetterCap + remainingLetters;
    }
    password += random;
    password += seperator;
  }
  if(charLimit !== -1){
    password = password.substring(0, charLimit)
  }
  if(seperator !== ""){
    password = password.substring(0, password.length-1).trim()
  }
  return password;
};

module.exports.generate = async (req, res, next) => {
  let pass = "";
  try {
    console.log(JSON.stringify({request: req.body}))
    const { numWords, charLimit, seperator, camelCase } = req.body;
    pass = assembleRandomPass(numWords, charLimit, seperator, camelCase);
    console.log(pass);
  } catch (err) {
    next(err);
  }
  res.json({ success: true, password: pass });
};
