# SoulTrain Home Assessment

This project is a backend server hosted on [SoulTrain Home Assessment Production](https://soultrain-home-assessment-production.up.railway.app). It provides several API endpoints for managing users.

## Project Structure

The project consists of the following components:

- **Controllers**: Responsible for handling the routing logic. Controllers import services to handle the actions for each API request.

- **Services**: Implement the business logic and handle actions for each API request. Services may interact with models to perform database operations.

- **Models**: Define the MongoDB models and schemas for the application's data.

- **Routes**: Define the API routes and their corresponding controller functions.

- **Middlewares**: Contains additional middleware functions used in the project. Currently, there are two middlewares implemented:
  - **bodyParser**: Parses the request body for `application/x-www-form-urlencoded` and `application/json` content types.
  - **rateLimitMiddleware**: Implements rate limiting functionality using the `express-rate-limit` package.

- **Configs**: Contains configuration files for the project. The `db.config.js` file handles the configuration for connecting to the MongoDB database.

- **Utils**: Contains utility functions or helper modules that can be used throughout the project.

## API Endpoints

- **GET api/v1/users**: Get all users.
- **POST api/v1/users**: Create a new user.
    ```shell
    {
        "username": "asdfasdf",
        "email": "asdfasdf@asdfasdf.com",
        "password": "asdfasdf"
    }
    ```
- **GET api/v1/users/:username**: Get a user by username.
- **DELETE api/v1/users/:username**: Delete a user by username.

## Installation

To install and run the project locally, please follow these steps:

1. Clone the repository:

   ```shell
   git clone git@github.com:stormchaser33/SoulTrain-Home-Assessment.git
   ```
2. Install dependencies:
    ```shell
    npm install
    ```
3. Run the server in development mode:
    ```shell
    npm run dev
    ```
## Usage
You can use the provided API endpoints to interact with the server and perform user-related operations. Here's an overview of the available endpoints:

- **GET api/v1/users**: Retrieve a list of all users.
- **POST api/v1/users**: Create a new user by providing the necessary details.
- **GET api/v1/users/:username**: Retrieve a user by their username.
- **DELETE api/v1/users/:username**: Delete a user by their username.
- Make sure to replace **:username** in the endpoint URLs with the actual username you want to retrieve or delete.

## Deployment
The server is currently deployed and hosted on [SoulTrain Home Assessment Production](https://soultrain-home-assessment-production.up.railway.app). 
You can access the API endpoints by making HTTP requests to the appropriate URLs.

## Technologies Used
- Node.js
- Express.js
- MongoDB