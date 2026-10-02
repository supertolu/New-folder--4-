# Structure Project

A simple Node.js and Express application that stores user and pet records in MongoDB.

## Overview

This project is a basic backend starter for working with MongoDB collections through REST API endpoints. It currently includes:

- retrieving all users
- creating a sample user
- retrieving all pets
- creating a sample pet

## Features

- Express server setup
- JSON request parsing
- MongoDB connection using the official MongoDB Node.js driver
- REST-style API routes for basic CRUD-style data access

## Tech Stack

- Node.js
- Express
- MongoDB

## Project Structure

- `app (1).js` — Express app and route handlers
- `db.js` — MongoDB database connection logic
- `package (1).json` — dependencies and project metadata
- `README.md` — project documentation

## Prerequisites

Before running this project, ensure you have:

- Node.js installed
- npm installed
- MongoDB running locally or a valid MongoDB Atlas connection string

## Installation

1. Open a terminal in the project directory.
2. Install dependencies:

```bash
npm install
```

## Configuration

The application currently defines its MongoDB connection in `db.js`. Update the connection string to match your local or cloud database before running the app.

Example:

```js
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODB_URI);
```

Set the environment variable in your shell:

Windows PowerShell:

```powershell
$env:MONGODB_URI="mongodb://localhost:27017/profile"
```

macOS/Linux:

```bash
export MONGODB_URI="mongodb://localhost:27017/profile"
```

## Running the Application

Start the server with:

```bash
node "app (1).js"
```

The app runs on:

```text
http://localhost:3000
```

## API Endpoints

### GET /api/users
Returns all documents from the `users` collection.

### POST /api/users
Creates a sample user record in the `users` collection.

### GET /api/pets
Returns all documents from the `pets` collection.

### POST /api/pets
Creates a sample pet record in the `pets` collection.

### 404 Not Found
Returns a response for routes that are not defined.

## Example Requests

### Get users

```bash
curl http://localhost:3000/api/users
```

### Create user

```bash
curl -X POST http://localhost:3000/api/users
```

### Get pets

```bash
curl http://localhost:3000/api/pets
```

### Create pet

```bash
curl -X POST http://localhost:3000/api/pets
```

## Notes

- The POST routes currently create hardcoded sample data instead of reading user input.
- This project is intended as a starter backend and can be extended with validation, better error handling, and full CRUD functionality.
- Sensitive database credentials should not be committed to source control in production.

## License

This project is licensed under the ISC license, as listed in `package (1).json`.
