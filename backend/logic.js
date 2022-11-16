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

assembleRandomPass = (numWords, seperator) => {
  let password = "";
  for (let index = 0; index < numWords; index++) {
    password += randomWord();
    password += seperator;
  }
  return password;
};

module.exports.generate = async (req, res, next) => {
  try {
    const { numWords, charLimit, seperator, camelCase } = req.body;
    const pass = assembleRandomPass(numWords, seperator);
    console.log(pass);
    res.json({ success: true, password: pass });
  } catch (err) {
    next(err);
  }
};
