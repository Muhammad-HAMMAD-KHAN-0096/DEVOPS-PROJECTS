/*
 This Code is a Node.js application built with the Express framework and MySQL database integration. It begins by importing necessary modules, including Express for web application routing
 and MySQL for database connectivity. The code configures the server to listen on a specified port or defaults to 3000 if none is provided. It establishes a connection to a MySQL database 
 using environment variables for host, username, password, port, and database name, then selects the specified database. The application defines three essential routes: the root route ('/'), 
 which returns a simple "hello world" message; the '/init' route, which initializes a 'users' table in the database and inserts sample data; and the '/users' route, which retrieves all records
 from the 'users' table and responds with the results. Additionally, the code includes a custom 404 route for handling undefined routes. When the server starts, it listens on the specified port
 and logs a message. This code provides a foundation for building a basic web application with MySQL database integration for user data management.
*/
// Importing the required modules
import express from 'express'; // Import the Express web framework.
import mysql from 'mysql'; // Import the MySQL driver for Node.js.

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3000; // Use the specified port in environment variables or default to 3000.

// Creating a connection to the MySQL database
const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME, // MySQL host from environment variables.
  user: process.env.RDS_USERNAME, // MySQL username from environment variables.
  password: process.env.RDS_PASSWORD, // MySQL password from environment variables.
  port: process.env.RDS_PORT, // MySQL port from environment variables.
  db_name: process.env.RDS_DB_NAME, // MySQL database name from environment variables.
});
connection.connect(); // Establish a connection to the MySQL server.

// Selecting the database specified in the environment variables
connection.query(`use ${process.env.RDS_DB_NAME};`); // Select the specified database.

// Creating an Express application
let app = express(); // Create an instance of the Express application.

// Handling a GET request to the root route
app.get('/', async (req, res) => {
  res.send({ message: 'hello world' }); // Respond with a JSON message: "hello world".
});

// Handling a GET request to the /init route
app.get('/init', async (req, res) => {
  // Creating a 'users' table if it doesn't exist
  connection.query('CREATE TABLE IF NOT EXISTS users (id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY, lastname VARCHAR(40), firstname VARCHAR(40), email VARCHAR(30));');
  
  // Inserting some initial data into the 'users' table
  connection.query('INSERT INTO users (lastname, firstname, email) VALUES ( "Tony", "Sam", "tonysam@whatever.com"), ( "Doe", "John", "john.doe@whatever.com" );');
  
  res.send({ message: "init step done" }); // Respond with a JSON message indicating the initialization is complete.
});

// Handling a GET request to the /users route
app.get('/users', async (req, res) => {
  // Querying all rows from the 'users' table
  connection.query('SELECT * from users', function (error, results) {
    if (error) throw error;
    res.send(results); // Respond with the query results.
  });
});

// Custom 404 route not found handler
app.use((req, res) => {
  res.status(404).send('404 not found'); // Respond with a 404 status code and a message for any unmatched routes.
});

// Starting the server to listen on the specified port
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`); // Log a message indicating that the server is listening on the specified port.
});
