const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const connectDB = require("./src/configs/db.config");
const { userRouter } = require("./src/routes");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
