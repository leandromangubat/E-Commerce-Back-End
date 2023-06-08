# E-Commerce Backend

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

This repository contains a functional Express.js API that connects to a MySQL database using Sequelize. By following the instructions below, you will be able to set up the API, connect it to your database, and interact with the provided routes using Insomnia Core.

## Technology
Node.js (version >= 12)
MySQL database

## Installation
- Clone this repository to your local machine.
- Navigate to the project's root directory in your terminal.
- Run the following command to install the required dependencies:
  npm install

## Configuration
- Create a new file in the project's root directory called .env. This file will hold   your environment variables.

- Open the .env file in a text editor and add the following variables:

  - DB_NAME="ecommerce_db"
  - DB_USERNAME="your_mysql_username"
  - DB_PASSWORD="your_mysql_password"

- Replace your_mysql_username, and your_mysql_password with your actual information.

## Database Setup
Run the following command to create the development database:

- mysql -u root -p
- (Enter your Password)
- source ./db/schema.sql;
- quit

The development database will be created and populated with the necessary tables and sample data. Once you've exited the mysql console, run the following commands to seed the data:
- npm run seed

To start the server and sync the Sequelize models with the MySQL database, run the following command:
- npm start

## Testing the API
Open Insomnia Core to test API routes.

Use the following endpoints to retrieve data:

GET http://localhost:3001/api/categories

GET http://localhost:3001/api/products

GET http://localhost:3001/api/tags

To create, update, or delete data in the database, use the following endpoints:

POST http://localhost:3001/api/categories

PUT http://localhost:3001/api/categories/:id

DELETE http://localhost:3001/api/categories/:id

POST http://localhost:3001/api/products

PUT http://localhost:3001/api/products/:id

DELETE http://localhost:3001/api/products/:id

POST http://localhost:3001/api/tags

PUT http://localhost:3001/api/tags/:id

DELETE http://localhost:3001/api/tags/:id

Replace :id with the actual ID of the category, product, or tag you want to modify.

## Credits
Developed by Leandro Mangubat.

Email: leandromangubat@hotmail.com 

Github: [github.com/leandromangubat](https://github.com/leandromangubat)

## License
This application is licensed under the MIT License.