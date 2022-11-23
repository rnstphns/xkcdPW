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

assembleRandomPass = (
  numWords,
  charLimit,
  seperator,
  partialWords,
  camelCase
) => {
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
  if (charLimit !== -1 && partialWords === "true") {
    password = password.substring(0, charLimit);
  }
  if (seperator !== "") {
    password = password.substring(0, password.length - 1).trim();
  }
  return password;
};

let rerolls = 0;
const REROLL_LIMIT = 10;

reroll = (numWords, charLimit, seperator, partialWords, camelCase) => {
  while(rerolls < REROLL_LIMIT){
    console.log(`rerolling... ${rerolls} times`);
    rerolls++;
    assembleRandomPass(numWords, charLimit, seperator, partialWords, camelCase);
  }
};

module.exports.generate = async (req, res, next) => {
  console.log(req);
  let pass = "";
  let resJson = { success: false };
  try {
    console.log(JSON.stringify({ request: req.body }));
    const { numWords, charLimit, seperator, partialWords, camelCase } =
      req.body;
    pass = assembleRandomPass(
      numWords,
      charLimit,
      seperator,
      partialWords,
      camelCase
    );
    if (pass.length > charLimit && charLimit !== -1 && partialWords === "false")
      pass = reroll(numWords, charLimit, seperator, partialWords, camelCase);
    else {
      rerolls = 0;
      resJson = { success: true, password: pass };
    }
    console.log(`pass returned : ${pass}`);
    rerolls = 0;
    res.json(resJson);
  } catch (err) {
    next(err);
  }
};
