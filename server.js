const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const compression = require("compression");

const connectDB = require("./src/configs/db.config");
const { userRouter } = require("./src/routes");
const { parseRequestBody, limiter } = require("./src/middlewares");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// connect to database
connectDB();

// middlewares
app.use(compression());
app.use(parseRequestBody);
app.use(limiter);

// routes
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
