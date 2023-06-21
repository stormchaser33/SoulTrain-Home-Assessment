const bodyParser = require("body-parser");

const parseRequestBody = (req, res, next) => {
  bodyParser.urlencoded({ extended: false })(req, res, () => {
    bodyParser.json()(req, res, next);
  });
};

module.exports = {
  parseRequestBody,
};
