// Import necessary modules: Express for web framework and node-fetch for making HTTP requests.
import express from 'express';
import fetch from 'node-fetch';

// Define the port on which the server will listen. Defaults to 3000 if not provided in the environment.
const PORT = process.env.PORT || 3000;

// Create an Express application instance.
let app = express();

// Define an environment variable for the URL of the application load balancer.
const APPLICATION_LOAD_BALANCER = process.env.APPLICATION_LOAD_BALANCER;

// Define a route for the root URL ('/').
app.get('/', async (req, res) => {
  // Make an asynchronous HTTP request to retrieve the hostname from an AWS metadata service.
  fetch('http://169.254.169.254/latest/meta-data/hostname').then(async (response) => {
    // When the response is received, extract the hostname and send it as a response to the client.
    const hostname = await response.text();
    res.send(`Hello from ${hostname}`);
  });
});

// Define a route for the '/init' URL.
app.get('/init', async (req, res) => {
  // Make an asynchronous HTTP request to the URL specified by APPLICATION_LOAD_BALANCER.
  fetch(`http://${APPLICATION_LOAD_BALANCER}/init`).then(async (response) => {
    // When the response is received, parse it as JSON and send it as a response to the client.
    const data = await response.json();
    res.send(data);
  });
});

// Define a route for the '/users' URL.
app.get('/users', async (req, res) => {
  // Make an asynchronous HTTP request to the URL specified by APPLICATION_LOAD_BALANCER.
  fetch(`http://${APPLICATION_LOAD_BALANCER}/users`).then(async (response) => {
    // When the response is received, parse it as JSON and send it as a response to the client.
    const data = await response.json();
    res.send(data);
  });
});

// Define a custom route not found handler for 404 errors.
app.use((req, res) => {
  // Send a '404 not found' response when no matching route is found.
  res.status(404).send('404 not found');
});

// Start the Express server, and log a message indicating which port it's listening on.
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
