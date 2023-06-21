const mongoose = require('mongoose')
require('dotenv').config()

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const database = process.env.DB_DATABASE;

const database_url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${database}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
      await mongoose.connect(database_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log("MongoDB Connected...");
    } catch (err) {
      console.error(err.message);
      // Exit process with failure
      process.exit(1);
    }
  };
  
  module.exports = connectDB;
  