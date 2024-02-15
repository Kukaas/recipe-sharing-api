# 🍔 Recipe Sharing API

# Group Members

- **👤 Chester Luke A. Maligaso**
- **👤 Marc Angelo Macaysa**
- **👤 Christine Rose Riego**
- **👤 Michael Jeff Sajul**

## 💡 About the API

This application is a Recipe Sharing System built using Node.js, Express, and MongoDB. It provides a RESTful API for creating, reading, updating, and deleting (CRUD) recipes.

## Features

In the culinary world, sharing and discovering new recipes is an integral part of the experience. The Recipe Sharing API aims to facilitate this exchange by providing developers with a platform to build applications that enable users to share, discover, and explore recipes effortlessly.

1. **Recipe Management**:
- **Create: Users can create their own recipes, including ingredients, preparation steps, cooking times, and more.**
2. **Tag-based Search**: Users can search for recipes based on tags. This feature allows users to find all recipes that fall under a specific category, such as 'Vegetarian', 'Gluten-free', etc.
3. **Name-based Search**: Users can search for recipes by their names. This feature allows users to find a specific recipe quickly if they know its name.
4. 
5. **Error Handling**: The application includes robust error handling. If an error occurs, the application will return a helpful error message and, in development mode, a stack trace.

## Purpose

The purpose of this application is to provide a simple and efficient way to manage and search for recipes.

# ⚙ Local Setup

Follow these steps to set up the application locally:

1. **Clone the Repository**: First, clone the repository to your local machine using Git. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/itsmeYaz/recipes-sharing-API.git
```

2. **Install Dependencies**: Navigate into the cloned repository directory and install the necessary dependencies. Run the following command in your terminal:

```bash
npm install
```

3. **Set Up Environment Variables**: Copy the `.env.example` file and rename the copy to `.env`. Then, replace the placeholder values with your actual values. For example, replace "**YOUR MONGODB URL HERE**" with your actual MongoDB connection string.

4. **Start the Server**: Now, you can start the server by running the following command in your terminal:

```bash
npm run dev
```

The server will start, and you should see a message like <span style="color:green"><strong>Listening on http://localhost:8080...</strong></span> in your terminal.

5. **Test the Application**: You can now test the application by sending requests to <span style="color:green"><strong>Listening on http://localhost:8080/api/recipes</strong></span>. You can use a tool like Postman to send HTTP requests.

# 🌐 Recipe API Endpoint Guide

This application provides several API endpoints for managing recipes:

This API allows you to manage recipes. Here's how you can use the endpoints:

## Get All Recipes

**Endpoint:** `/api/recipes`

**Method:** `GET`

**Description:** Returns all recipes.

## Get a Specific Recipe by ID

**Endpoint:** `/api/recipes/:id`

**Method:** `GET`

**Description:** Returns the recipe with the specified ID.

**Parameters:**

- `id`: The ID of the recipe.

## Get Recipes by Name

**Endpoint:** `/api/recipes/name/:name`

**Method:** `GET`

**Description:** Returns recipes with the specified name.

**Parameters:**

- `name`: The name of the recipe.

## Get Recipes by Tag

**Endpoint:** `/api/recipes/tag/:tag`

**Method:** `GET`

**Description:** Returns recipes with the specified tag.

**Parameters:**

- `tag`: The tag of the recipe.

## Create a New Recipe

**Endpoint:** `/api/recipes`

**Method:** `POST`

**Description:** Creates a new recipe.

**Body:**

- `name`: The name of the recipe (required).
- `ingredients`: The ingredients of the recipe (required).
- `steps`: The steps of the recipe (required).
- `tag`: The tags of the recipe (optional).

## Update a Recipe

**Endpoint:** `/api/recipes/:id`

**Method:** `PUT`

**Description:** Updates the recipe with the specified ID.

**Parameters:**

- `id`: The ID of the recipe.

**Body:**

- `name`: The name of the recipe (optional).
- `ingredients`: The ingredients of the recipe (optional).
- `steps`: The steps of the recipe (optional).
- `tag`: The tags of the recipe (optional).

## Delete a Recipe

**Endpoint:** `/api/recipes/:id`

**Method:** `DELETE`

**Description:** Deletes the recipe with the specified ID.

**Parameters:**

- `id`: The ID of the recipe.

# 🌐 Live API

The server has been deployed and is available for testing. You can interact with the API using different HTTP methods (GET, POST, PUT, DELETE).

API Base URL: [https://recipe-sharing-api-v2.onrender.com](https://recipe-sharing-api-v2.onrender.com)

## Get All Recipes

**Endpoint:** `https://recipe-sharing-api-v2.onrender.com/api/recipes`

**Method:** `GET`

**Description:** Returns all recipes.

**Example Request:**

```bash
 GET https://recipe-sharing-api-v2.onrender.com/api/recipes
```

# 📚 Dependencies Guide

This project uses several dependencies to function correctly. Here's a brief description of each one:

## Dependencies

### 🌐 cors

**Version:** ^2.8.5

**Description:** This package is used to enable Cross-Origin Resource Sharing (CORS).

**Usage:** In this project, cors is used to enable CORS, allowing the server to accept requests from different origins.

### 🔑 dotenv

**Version:** ^16.4.2

**Description:** This package is used to load environment variables from a `.env` file into `process.env`.

**Usage:** In this project, dotenv is used to manage environment variables, keeping sensitive data like database connection strings secure.

### 🚀 express

**Version:** ^4.18.2

**Description:** This package is a fast, unopinionated, and minimalist web framework for Node.js.

**Usage:** In this project, Express is used to create the server and manage the API routes.

### 🛠️ express-async-handler

**Version:** ^1.2.0

**Description:** This package is a middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

**Usage:** In this project, express-async-handler is used to handle exceptions in asynchronous route handlers, improving error handling.

### 📚 mongoose

**Version:** ^8.1.2

**Description:** This package is a MongoDB object modeling tool designed to work in an asynchronous environment.

**Usage:** In this project, Mongoose is used to model the application data and interact with the MongoDB database.

## 🔧 DevDependencies

### 🔄 nodemon

**Version:** ^3.0.3

**Description:** This package is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

**Usage:** In this project, Nodemon is used to automatically restart the server whenever a file is changed. It's used in the `dev` script in the `package.json` file.