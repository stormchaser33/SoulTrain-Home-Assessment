// Import the Mongoose library
const mongoose = require("mongoose");
// Load environment variables from .env file
require("dotenv").config();

// Retrieve environment variables
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const database = process.env.DB_DATABASE;

// Construct the MongoDB connection URL
const database_url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${database}?retryWrites=true&w=majority`;

// Define the function to connect to the database
const connectDB = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(database_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connection successful
    console.log("MongoDB Connected...");
  } catch (err) {
    // Connection failed
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

// Export the connectDB function to be used in other files
module.exports = connectDB;

// Execute the connectDB function to establish the database connection
connectDB();
