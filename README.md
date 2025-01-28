# User & Post CRUD API with Node.js

This repository provides a Node.js API for performing CRUD (Create, Read, Update, Delete) operations for users and posts. It includes:

- User CRUD API
- Post CRUD API
- MongoDB object ID validation
- A Postman collection for testing the API

## Features

- **User CRUD API**: Create, Read, Update, and Delete users.
- **Post CRUD API**: Create, Read, Update, and Delete posts.
- **Validation**: MongoDB ObjectId validation for route parameters.
- **Database**: MongoDB for data persistence.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later recommended)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/) (optional, for testing the API)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root of your project and add the following variables:
   ```env
   PORT=9000
   MONGO_URI=<your-mongodb-connection-string>
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:3000` by default.

## Validation

This API validates MongoDB Object IDs for routes using middleware. Ensure you use valid Object IDs for any endpoint requiring an `:id` parameter.

## Postman Collection

Import the Postman collection to test the API endpoints. The collection includes all available routes with example requests.

### Steps to Import:

1. Download the Postman collection file: [Postman Collection](postman_collection.json).
2. Open Postman and go to **File > Import**.
3. Select the `postman_collection.json` file.


## License

This project is licensed under the [MIT License](LICENSE).

