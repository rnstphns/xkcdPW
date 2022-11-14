const dict = require("./dict");

randomWord = (type) => {
  if (type === undefined)
    //roll randomly
    console.log(type);
};
assemblePass = () => {};

module.exports.generate = async (req, res, next) => {
  try {
    console.log(JSON.stringify(req.body));
    const { numWords, charLimit, seperator, camelCase } = req.body;
    console.log(dict.getAdjectives());
  } catch (err) {
    next(err);
  }
  res.json({ success: true, request: req.body });
};
