const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const compression = require("compression");

require("./src/configs/db.config");
const { userRouter } = require("./src/routes");
const { parseRequestBody, limiter } = require("./src/middlewares");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(compression());
app.use(parseRequestBody);
app.use(limiter);

// routes
app.get("/", (req, res) => res.send("Hello! SOULTRAIN Server is working"));
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
