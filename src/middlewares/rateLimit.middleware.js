const RateLimit = require("express-rate-limit");
require("dotenv").config();

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  max: process.env.REQUEST_RATE_LIMIT,
});

module.exports = {
  limiter,
};
