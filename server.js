const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./src/configs/db.config');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB()

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})