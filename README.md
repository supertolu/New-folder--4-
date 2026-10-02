# Structure Project

A simple Node.js + Express API for managing users and pets stored in MongoDB.

## Overview

This project exposes a small REST API with endpoints for:

- retrieving users
- creating a sample user
- retrieving pets
- creating a sample pet

The server is built with Express and uses MongoDB for persistence.

## Tech Stack

- Node.js
- Express
- MongoDB Node.js Driver

## Project Files

- `app (1).js` — Express application and route definitions
- `db.js` — MongoDB connection setup
- `package (1).json` — project dependencies and scripts

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB running locally or a MongoDB Atlas connection string available
- npm installed

## Installation

1. Open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

## Configuration

The MongoDB connection string is currently defined in `db.js`.

Before starting the application, update the connection details in that file to match your database setup.

Example:

```js
const client = new MongoClient(process.env.MONGODB_URI);
```

and set the environment variable in your shell:

```bash
set MONGODB_URI=mongodb://localhost:27017/profile
```

On macOS/Linux:

```bash
export MONGODB_URI=mongodb://localhost:27017/profile
```

## Running the App

Start the server with:

```bash
node "app (1).js"
```

The API will run on:

```text
http://localhost:3000
```

## API Endpoints

### GET /api/users
Returns all users from the `users` collection.

### POST /api/users
Creates a sample user record in the `users` collection.

### GET /api/pets
Returns all pets from the `pets` collection.

### POST /api/pets
Creates a sample pet record in the `pets` collection.

### 404
Returns a 404 response for unknown routes.

## Notes

- The project currently uses hardcoded sample data in the POST routes.
- The MongoDB connection should be secured before production use.
- This project is a basic starter backend and can be extended with validation, CRUD routes, and environment-based configuration.

## License

This project uses the ISC license as defined in `package (1).json`.
